from flask import Flask, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)

# Load the saved model and scalar
model = joblib.load('flask_api\\final_model.joblib')
scaler = joblib.load('flask_api\\scaler.joblib')

fetal_health_status = {1: 'Normal', 2: 'Suspect', 3: 'Pathological'}

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = np.array([[
        data['baseline_value'], 
        data['accelerations'], 
        data['fetal_movement'],
        data['uterine_contractions'], 
        data['light_decelerations'], 
        data['severe_decelerations'],
        data['prolongued_decelerations'], 
        data['abnormal_short_term_variability'], 
        data['mean_value_of_short_term_variability'],
        data['percentage_of_time_with_abnormal_long_term_variability'], 
        data['mean_value_of_long_term_variability'],
        data['histogram_width'], 
        data['histogram_min'], 
        data['histogram_max'],
        data['histogram_number_of_peaks'], 
        data['histogram_number_of_zeroes'],
        data['histogram_mode'], 
        data['histogram_variance'], 
        data['histogram_tendency']
    ]])

    # Scaling the input data
    features = scaler.transform(features)

    prediction = model.predict(features)
    status = fetal_health_status[int(prediction[0])]

    return jsonify({'status': status})

if __name__ == '__main__':
    app.run(debug=True)