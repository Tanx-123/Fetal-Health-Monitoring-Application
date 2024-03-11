import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    baseline_value: '',
    accelerations: '',
    fetal_movement: '',
    uterine_contractions: '',
    light_decelerations: '',
    severe_decelerations: '',
    prolongued_decelerations: '',
    abnormal_short_term_variability: '',
    mean_value_of_short_term_variability: '',
    percentage_of_time_with_abnormal_long_term_variability: '',
    mean_value_of_long_term_variability: '',
    histogram_width: '',
    histogram_min: '',
    histogram_max: '',
    histogram_number_of_peaks: '',
    histogram_number_of_zeroes: '',
    histogram_mode: '',
    histogram_variance: '',
    histogram_tendency: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/predict', formData);
      setStatus(response.data.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Baseline Value:
          <input
            type="text"
            name="baseline_value"
            value={formData.baseline_value}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Accelerations:
          <input
            type="text"
            name="accelerations"
            value={formData.accelerations}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Fetal Movement:
          <input
            type="text"
            name="fetal_movement"
            value={formData.fetal_movement}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Uterine Contractions:
          <input
            type="text"
            name="uterine_contractions"
            value={formData.uterine_contractions}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Light Decelerations:
          <input
            type="text"
            name="light_decelerations"
            value={formData.light_decelerations}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Severe Decelerations:
          <input
            type="text"
            name="severe_decelerations"
            value={formData.severe_decelerations}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Prolongued Decelerations:
          <input
            type="text"
            name="prolongued_decelerations"
            value={formData.prolongued_decelerations}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Abnormal Short Term Variability:
          <input
            type="text"
            name="abnormal_short_term_variability"
            value={formData.abnormal_short_term_variability}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Mean Value of Short Term Variability:
          <input
            type="text"
            name="mean_value_of_short_term_variability"
            value={formData.mean_value_of_short_term_variability}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Percentage of Time with Abnormal Long Term Variability:
          <input
            type="text"
            name="percentage_of_time_with_abnormal_long_term_variability"
            value={formData.percentage_of_time_with_abnormal_long_term_variability}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Mean Value of Long Term Variability:
          <input
            type="text"
            name="mean_value_of_long_term_variability"
            value={formData.mean_value_of_long_term_variability}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Histogram Width:
          <input
            type="text"
            name="histogram_width"
            value={formData.histogram_width}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Histogram Min:
          <input
            type="text"
            name="histogram_min"
            value={formData.histogram_min}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Histogram Max:
          <input
            type="text"
            name="histogram_max"
            value={formData.histogram_max}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Histogram Number of Peaks:
          <input
            type="text"
            name="histogram_number_of_peaks"
            value={formData.histogram_number_of_peaks}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Histogram Number of Zeroes:
          <input
            type="text"
            name="histogram_number_of_zeroes"
            value={formData.histogram_number_of_zeroes}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Histogram Mode:
          <input
            type="text"
            name="histogram_mode"
            value={formData.histogram_mode}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Histogram Variance:
          <input
            type="text"
            name="histogram_variance"
            value={formData.histogram_variance}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Histogram Tendency:
          <input
            type="text"
            name="histogram_tendency"
            value={formData.histogram_tendency}
            onChange={handleChange}
          />
        </label>
        <br/>
        <button type="submit">Predict</button>
      </form>
      {status && <p>Predicted fetal health status: {status}</p>}
    </div>
  );
};
export default App;