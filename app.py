from flask import Flask, request, jsonify
import pandas as pd
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the model from the pickle file
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)


df = pd.read_csv('data.csv')
symptoms = df.iloc[:,0:132].columns.values


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        # Make sure the input data format matches the model's requirements
        input_data = data["symptoms"]
        symptom_dict = {symptom: [1] if symptom in input_data else [0] for symptom in symptoms}
        input_df = pd.DataFrame(symptom_dict)

        # # Make a prediction using the loaded model
        prediction = model.predict(input_df)

        return jsonify({'prediction': prediction[0]})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
