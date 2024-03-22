import React, { useState } from 'react';
import axios from 'axios';
import '../student.css';
import './groupRegistration.css';

export default function GroupRegistraaaaa(){


    const [formData, setFormData] = useState({
		member1_name: '',
		member1StudentID: '',
		member1_contact_number: '',
		member1_email: '',
		member1_batch: '',
		member1_specialization: '',
		member2_name: '',
		member2StudentID: '',
		member2_contact_number: '',
		member2_email: '',
		member2_batch: '',
		member2_specialization: '',
		member3_name: '',
		member3StudentID: '',
		member3_contact_number: '',
		member3_email: '',
		member3_batch: '',
		member3_specialization: '',
		member4_name: '',
		member4StudentID: '',
		member4_contact_number: '',
		member4_email: '',
		member4_batch: '',
		member4_specialization: '',
		leader_name: '',
		leader_studentID: '',
		project_title: '',
		research_area: '',
		research_group: '',
		supervisor: '',
		co_supervisor: '',
	});
	
	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState({});
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	
		// Real-time validation
		if (!value) {
			setErrors({ ...errors, [name]: "This field is required" });
			setSuccess({ ...success, [name]: '' });
		  } else {
			if ((name === 'member1_contact_number') || (name === 'member2_contact_number') || (name === 'member3_contact_number') || (name === 'member4_contact_number')) {
			  if (!/^0\d{9}$/.test(value)) {
				setErrors({ ...errors, [name]: 'Phone number must start with 0 and contain exactly 10 digits' });
				setSuccess({ ...success, [name]: '' });
			  } else {
				setErrors({ ...errors, [name]: '' });
				setSuccess({ ...success, [name]: "Looks good!" });
			  }
			} else if ((name === 'member1_email') || (name === 'member2_email') || (name === 'member3_email') || (name === 'member4_email')) {
			  if (!/^\S+@\S+\.\S+$/.test(value)) {
				setErrors({ ...errors, [name]: 'Invalid email format' });
				setSuccess({ ...success, [name]: '' });
			  } else {
				setErrors({ ...errors, [name]: '' });
				setSuccess({ ...success, [name]: "Looks good!" });
			  }
			} else if ((name === 'member1StudentID') || (name === 'member2StudentID') || (name === 'member3StudentID') || (name === 'member4StudentID') || (name === 'leader_studentID')) {
			  if (!/^IT\d{8}$/.test(value)) {
				setErrors({ ...errors, [name]: 'Registration number must start with "IT" followed by 8 digits' });
				setSuccess({ ...success, [name]: '' });
			  } else {
				setErrors({ ...errors, [name]: '' });
				setSuccess({ ...success, [name]: "Looks good!" });
			  }
			} else {
			  setErrors({ ...errors, [name]: '' });
			  setSuccess({ ...success, [name]: "Looks good!" });
			}
		}
	  };
	
	  const handleSubmit = (e) => {
		e.preventDefault();
	
		let errorsObj = {};
		let successObj = {};
	
		// Check for empty fields and format errors
		Object.keys(formData).forEach((key) => {
			if (!formData[key]) {
				errorsObj[key] = "This field is required";
				successObj[key] = ''; // Reset success message if there's a format error
		  	} else if (errors[key]) {
				errorsObj[key] = errors[key]; // Preserve format error message
				successObj[key] = ''; // Reset success message if there's a format error
		  	} else {
				successObj[key] = "Looks good!"; // Assign success message
			}
		});
	
		// Update errors and success objects
		setErrors(errorsObj);
		setSuccess(successObj);
		console.log(errors);
		// If no errors, you can perform form submission action here
		if (Object.keys(errorsObj).length === 0) {
			submitFormData();
		  // Form submission action
		  	console.log('Form submitted successfully!');
		} else {
		  	console.log('Form has errors. Please fix them before submitting.');
		}
	};

	const submitFormData = async () => {
		try {
			// Send form data using Axios POST request
			const response = await axios.post('http://localhost:8083/rpmms/api/rpgroup/saveGroup', formData);
	
			// Handle response if needed
			console.log('Form submitted successfully!');
			console.log(response.data);
			alert(response.data);
			// Clear form fields after successful submission
			setFormData({
				member1_name: '',
				member1StudentID: '',
				member1_contact_number: '',
				member1_email: '',
				member1_batch: '',
				member1_specialization: '',
				member2_name: '',
				member2StudentID: '',
				member2_contact_number: '',
				member2_email: '',
				member2_batch: '',
				member2_specialization: '',
				member3_name: '',
				member3StudentID: '',
				member3_contact_number: '',
				member3_email: '',
				member3_batch: '',
				member3_specialization: '',
				member4_name: '',
				member4StudentID: '',
				member4_contact_number: '',
				member4_email: '',
				member4_batch: '',
				member4_specialization: '',
				leader_name: '',
				leader_studentID: '',
				project_title: '',
				research_area: '',
				research_group: '',
				supervisor: '',
				co_supervisor: '',
			});
			// Reload the page after form submission
			window.location.reload();
		} catch (error) {
			console.error('Error submitting form:', error);
			if (error.response) {
				console.error('Server responded with status:', error.response.status);
				console.error('Response data:', error.response.data);
				alert(error.response.data);
			}
		}
	};
	
	return (
		<div className="groupRegistration-container">
            <div className="main-container">
				<div className="heading-container">
					<h2> Group Registration</h2>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="container">
						<div className="item item-1">
							<h4>Member 1 details</h4>
							
							<div className="col-md-10 mb-1">
                                <label htmlFor="validationServer01">Member 1 name</label>
                                <input 
									type="text" 
									className={`form-control ${(errors.member1_name ? 'is-invalid' : '') || (success.member1_name ? 'is-valid' : '')}`}
									name="member1_name" 
									placeholder="Disanayake D.M.S."
									value={formData.member1_name} 
									onChange={handleChange} 
								/>
								{errors.member1_name && <div className="invalid-feedback">{errors.member1_name}</div>}
          						{success.member1_name && <div className="valid-feedback">{success.member1_name}</div>}
                            </div>
							<div className="col-md-10 mb-1">
                                <label htmlFor="validationServer02">Student registration number</label>
								<input 
									type="text" 
									className={`form-control ${(errors.member1StudentID ? 'is-invalid' : '') || (success.member1StudentID ? 'is-valid' : '')}`}
									name="member1StudentID" 
									placeholder="IT22765432"
									value={formData.member1StudentID} 
									onChange={handleChange} 
								/>
								{errors.member1StudentID && <div className="invalid-feedback">{errors.member1StudentID}</div>}
          						{success.member1StudentID && <div className="valid-feedback">{success.member1StudentID}</div>}
                            </div>
							<div class="col-md-10 mb-1">
								<label for="validationDefault03">Contact number</label>
								<input 
									type="text" 
									className={`form-control ${(errors.member1_contact_number ? 'is-invalid' : '') || (success.member1_contact_number ? 'is-valid' : '')}`}
									name="member1_contact_number" 
									placeholder="0775434567"
									value={formData.member1_contact_number} 
									onChange={handleChange} 
								/>
								{errors.member1_contact_number && <div className="invalid-feedback">{errors.member1_contact_number}</div>}
          						{success.member1_contact_number && <div className="valid-feedback">{success.member1_contact_number}</div>}
							</div>
                            <div className="col-md-10 mb-1">
								<label for="validationServer04">Email</label>
								<input 
									type="text" 
									className={`form-control ${(errors.member1_email ? 'is-invalid' : '') || (success.member1_email ? 'is-valid' : '')}`}
									name="member1_email" 
									placeholder="disanayake@gmail.com"
									value={formData.member1_email} 
									onChange={handleChange} 
								/>
								{errors.member1_email && <div className="invalid-feedback">{errors.member1_email}</div>}
          						{success.member1_email && <div className="valid-feedback">{success.member1_email}</div>}
							</div>
							<div className="col-md-10 mb-1">
								<label for="validationServer05">Batch</label>
								<select 
									name="member1_batch" 
									className={`form-control ${(errors.member1_batch ? 'is-invalid' : '') || (success.member1_batch ? 'is-valid' : '')}`}
									value={formData.member1_batch} 
									onChange={handleChange}
								>
								  	<option value="">Select batch</option>
									<option value="Regular">Regular</option>
								  	<option value="June">June</option>
								</select>
								{errors.member1_batch && <div className="invalid-feedback">{errors.member1_batch}</div>}
								{success.member1_batch && <div className="valid-feedback">{success.member1_batch}</div>}
							</div>
							<div class="col-md-10 mb-1">
								<label for="validationDefault06">Specialization</label>
								<select 
									name="member1_specialization" 
									className={`form-control ${(errors.member1_specialization ? 'is-invalid' : '') || (success.member1_specialization ? 'is-valid' : '')}`}
									value={formData.member1_specialization} 
									onChange={handleChange}
								>
								  	<option value="">Select specialization</option>
									<option value="IT">IT</option>
								  	<option value="SE">SE</option>
								  	<option value="IS">IS</option>
									<option value="CS">CS</option>
								  	<option value="DS">DS</option>
									<option value="CSNE">CSNE</option>
								</select>
								{errors.member1_specialization && <div className="invalid-feedback">{errors.member1_specialization}</div>}
								{success.member1_specialization && <div className="valid-feedback">{success.member1_specialization}</div>}
							</div>
						</div>

						<div className="item item-2">
							<h4>Member 2 details</h4>

							<div className="col-md-10 mb-1">
                                <label htmlFor="validationServer01">Member 2 name</label>
                                <input 
									type="text" 
									className={`form-control ${(errors.member2_name ? 'is-invalid' : '') || (success.member2_name ? 'is-valid' : '')}`}
									name="member2_name" 
									placeholder="Disanayake D.M.S."
									value={formData.member2_name} 
									onChange={handleChange} 
								/>
								{errors.member2_name && <div className="invalid-feedback">{errors.member2_name}</div>}
          						{success.member2_name && <div className="valid-feedback">{success.member2_name}</div>}
                            </div>
							<div className="col-md-10 mb-1">
                                <label htmlFor="validationServer02">Student registration number</label>
								<input 
									type="text" 
									className={`form-control ${(errors.member2StudentID ? 'is-invalid' : '') || (success.member2StudentID ? 'is-valid' : '')}`}
									name="member2StudentID" 
									placeholder="IT22567654"
									value={formData.member2StudentID} 
									onChange={handleChange} 
								/>
								{errors.member2StudentID && <div className="invalid-feedback">{errors.member2StudentID}</div>}
          						{success.member2StudentID && <div className="valid-feedback">{success.member2StudentID}</div>}
                            </div>
							<div class="col-md-10 mb-1">
								<label for="validationDefault03">Contact number</label>
								<input 
									type="text" 
									className={`form-control ${(errors.member2_contact_number ? 'is-invalid' : '') || (success.member2_contact_number ? 'is-valid' : '')}`}
									name="member2_contact_number" 
									placeholder="0775434567"
									value={formData.member2_contact_number} 
									onChange={handleChange} 
								/>
								{errors.member2_contact_number && <div className="invalid-feedback">{errors.member2_contact_number}</div>}
          						{success.member2_contact_number && <div className="valid-feedback">{success.member2_contact_number}</div>}
							</div>
                            <div className="col-md-10 mb-1">
								<label for="validationServer04">Email</label>
								<input 
									type="text" 
									className={`form-control ${(errors.member2_email ? 'is-invalid' : '') || (success.member2_email ? 'is-valid' : '')}`}
									name="member2_email" 
									placeholder="disanayake@gmail.com"
									value={formData.member2_email} 
									onChange={handleChange} 
								/>
								{errors.member2_email && <div className="invalid-feedback">{errors.member2_email}</div>}
          						{success.member2_email && <div className="valid-feedback">{success.member2_email}</div>}
							</div>
							<div className="col-md-10 mb-1">
								<label for="validationServer05">Batch</label>
								<select 
									name="member2_batch" 
									className={`form-control ${(errors.member2_batch ? 'is-invalid' : '') || (success.member2_batch ? 'is-valid' : '')}`}
									value={formData.member2_batch} 
									onChange={handleChange}
								>
								  	<option value="">Select batch</option>
									<option value="Regular">Regular</option>
								  	<option value="June">June</option>
								</select>
								{errors.member2_batch && <div className="invalid-feedback">{errors.member2_batch}</div>}
								{success.member2_batch && <div className="valid-feedback">{success.member2_batch}</div>}
							</div>
							<div class="col-md-10 mb-1">
								<label for="validationDefault06">Specialization</label>
								<select 
									name="member2_specialization" 
									className={`form-control ${(errors.member2_specialization ? 'is-invalid' : '') || (success.member2_specialization ? 'is-valid' : '')}`}
									value={formData.member2_specialization} 
									onChange={handleChange}
								>
								  	<option value="">Select specialization</option>
									<option value="IT">IT</option>
								  	<option value="SE">SE</option>
								  	<option value="IS">IS</option>
									<option value="CS">CS</option>
								  	<option value="DS">DS</option>
									<option value="CSNE">CSNE</option>
								</select>
								{errors.member2_specialization && <div className="invalid-feedback">{errors.member2_specialization}</div>}
								{success.member2_specialization && <div className="valid-feedback">{success.member2_specialization}</div>}
							</div>
						</div>
			
						<div className="item item-3">
							<h4>Member 3 details</h4>

							<div className="col-md-10 mb-1">
                                <label htmlFor="validationServer01">Member 3 name</label>
                                <input 
									type="text" 
									className={`form-control ${(errors.member3_name ? 'is-invalid' : '') || (success.member3_name ? 'is-valid' : '')}`}
									name="member3_name" 
									placeholder="Disanayake D.M.S."
									value={formData.member3_name} 
									onChange={handleChange} 
								/>
								{errors.member3_name && <div className="invalid-feedback">{errors.member3_name}</div>}
          						{success.member3_name && <div className="valid-feedback">{success.member3_name}</div>}
                            </div>
							<div className="col-md-10 mb-1">
                                <label htmlFor="validationServer02">Student registration number</label>
								<input 
									type="text" 
									className={`form-control ${(errors.member3StudentID ? 'is-invalid' : '') || (success.member3StudentID ? 'is-valid' : '')}`}
									name="member3StudentID" 
									placeholder="IT22765434"
									value={formData.member3StudentID} 
									onChange={handleChange} 
								/>
								{errors.member3StudentID && <div className="invalid-feedback">{errors.member3StudentID}</div>}
          						{success.member3StudentID && <div className="valid-feedback">{success.member3StudentID}</div>}
                            </div>
							<div class="col-md-10 mb-1">
								<label for="validationDefault03">Contact number</label>
								<input 
									type="text" 
									className={`form-control ${(errors.member3_contact_number ? 'is-invalid' : '') || (success.member3_contact_number ? 'is-valid' : '')}`}
									name="member3_contact_number" 
									placeholder="0775434567"
									value={formData.member3_contact_number} 
									onChange={handleChange} 
								/>
								{errors.member3_contact_number && <div className="invalid-feedback">{errors.member3_contact_number}</div>}
          						{success.member3_contact_number && <div className="valid-feedback">{success.member3_contact_number}</div>}
							</div>
                            <div className="col-md-10 mb-1">
								<label for="validationServer04">Email</label>
								<input 
									type="text" 
									className={`form-control ${(errors.member3_email ? 'is-invalid' : '') || (success.member3_email ? 'is-valid' : '')}`}
									name="member3_email" 
									placeholder="disanayake@gmail.com"
									value={formData.member3_email} 
									onChange={handleChange} 
								/>
								{errors.member3_email && <div className="invalid-feedback">{errors.member3_email}</div>}
          						{success.member3_email && <div className="valid-feedback">{success.member3_email}</div>}
							</div>
							<div className="col-md-10 mb-1">
								<label for="validationServer05">Batch</label>
								<select 
									name="member3_batch" 
									className={`form-control ${(errors.member3_batch ? 'is-invalid' : '') || (success.member3_batch ? 'is-valid' : '')}`}
									value={formData.member3_batch} 
									onChange={handleChange}
								>
								  	<option value="">Select batch</option>
									<option value="Regular">Regular</option>
								  	<option value="June">June</option>
								</select>
								{errors.member3_batch && <div className="invalid-feedback">{errors.member3_batch}</div>}
								{success.member3_batch && <div className="valid-feedback">{success.member3_batch}</div>}
							</div>
							<div class="col-md-10 mb-1">
								<label for="validationDefault06">Specialization</label>
								<select 
									name="member3_specialization" 
									className={`form-control ${(errors.member3_specialization ? 'is-invalid' : '') || (success.member3_specialization ? 'is-valid' : '')}`}
									value={formData.member3_specialization} 
									onChange={handleChange}
								>
								  	<option value="">Select specialization</option>
									<option value="IT">IT</option>
								  	<option value="SE">SE</option>
								  	<option value="IS">IS</option>
									<option value="CS">CS</option>
								  	<option value="DS">DS</option>
									<option value="CSNE">CSNE</option>
								</select>
								{errors.member3_specialization && <div className="invalid-feedback">{errors.member3_specialization}</div>}
								{success.member3_specialization && <div className="valid-feedback">{success.member3_specialization}</div>}
							</div>
						</div>
						
						<div className="item item-4">
							<h4>Member 4 details</h4>
							
							<div className="col-md-10 mb-1">
                                <label htmlFor="validationServer01">Member 4 name</label>
                                <input 
									type="text" 
									className={`form-control ${(errors.member4_name ? 'is-invalid' : '') || (success.member4_name ? 'is-valid' : '')}`}
									name="member4_name" 
									placeholder="Disanayake D.M.S."
									value={formData.member4_name} 
									onChange={handleChange} 
								/>
								{errors.member4_name && <div className="invalid-feedback">{errors.member4_name}</div>}
          						{success.member4_name && <div className="valid-feedback">{success.member4_name}</div>}
                            </div>
							<div className="col-md-10 mb-1">
                                <label htmlFor="validationServer02">Student registration number</label>
								<input 
									type="text" 
									className={`form-control ${(errors.member4StudentID ? 'is-invalid' : '') || (success.member4StudentID ? 'is-valid' : '')}`}
									name="member4StudentID" 
									placeholder="IT22876754"
									value={formData.member4StudentID} 
									onChange={handleChange} 
								/>
								{errors.member4StudentID && <div className="invalid-feedback">{errors.member4StudentID}</div>}
          						{success.member4StudentID && <div className="valid-feedback">{success.member4StudentID}</div>}
                            </div>
							<div class="col-md-10 mb-1">
								<label for="validationDefault03">Contact number</label>
								<input 
									type="text" 
									className={`form-control ${(errors.member4_contact_number ? 'is-invalid' : '') || (success.member4_contact_number ? 'is-valid' : '')}`}
									name="member4_contact_number" 
									placeholder="0775434567"
									value={formData.member4_contact_number} 
									onChange={handleChange} 
								/>
								{errors.member4_contact_number && <div className="invalid-feedback">{errors.member4_contact_number}</div>}
          						{success.member4_contact_number && <div className="valid-feedback">{success.member4_contact_number}</div>}
							</div>
                            <div className="col-md-10 mb-1">
								<label for="validationServer04">Email</label>
								<input 
									type="text" 
									className={`form-control ${(errors.member4_email ? 'is-invalid' : '') || (success.member4_email ? 'is-valid' : '')}`}
									name="member4_email" 
									placeholder="disanayake@gmail.com"
									value={formData.member4_email} 
									onChange={handleChange} 
								/>
								{errors.member4_email && <div className="invalid-feedback">{errors.member4_email}</div>}
          						{success.member4_email && <div className="valid-feedback">{success.member4_email}</div>}
							</div>
							<div className="col-md-10 mb-1">
								<label for="validationServer05">Batch</label>
								<select 
									name="member4_batch" 
									className={`form-control ${(errors.member4_batch ? 'is-invalid' : '') || (success.member4_batch ? 'is-valid' : '')}`}
									value={formData.member4_batch} 
									onChange={handleChange}
								>
								  	<option value="">Select batch</option>
									<option value="Regular">Regular</option>
								  	<option value="June">June</option>
								</select>
								{errors.member4_batch && <div className="invalid-feedback">{errors.member4_batch}</div>}
								{success.member4_batch && <div className="valid-feedback">{success.member4_batch}</div>}
							</div>
							<div class="col-md-10 mb-1">
								<label for="validationDefault06">Specialization</label>
								<select 
									name="member4_specialization" 
									className={`form-control ${(errors.member4_specialization ? 'is-invalid' : '') || (success.member4_specialization ? 'is-valid' : '')}`}
									value={formData.member4_specialization} 
									onChange={handleChange}
								>
								  	<option value="">Select specialization</option>
									<option value="IT">IT</option>
								  	<option value="SE">SE</option>
								  	<option value="IS">IS</option>
									<option value="CS">CS</option>
								  	<option value="DS">DS</option>
									<option value="CSNE">CSNE</option>
								</select>
								{errors.member4_specialization && <div className="invalid-feedback">{errors.member4_specialization}</div>}
								{success.member4_specialization && <div className="valid-feedback">{success.member4_specialization}</div>}
							</div>
						</div>

						<div className="item item-5">
							<h4>Group leader details</h4>
							<div className="col-md-10 mb-1">
								<label for="validationServer01">Leader name</label>
								<input 
									type="text" 
									className={`form-control ${(errors.leader_name ? 'is-invalid' : '') || (success.leader_name ? 'is-valid' : '')}`}
									name="leader_name" 
									placeholder="Disanayake D.M.S."
									value={formData.leader_name} 
									onChange={handleChange} 
								/>
								{errors.leader_name && <div className="invalid-feedback">{errors.leader_name}</div>}
          						{success.leader_name && <div className="valid-feedback">{success.leader_name}</div>}
							</div>
							<div className="col-md-10 mb-1">
								<label for="validationServer02">Student registration number</label>
								<input 
									type="text" 
									className={`form-control ${(errors.leader_studentID ? 'is-invalid' : '') || (success.leader_studentID ? 'is-valid' : '')}`}
									name="leader_studentID" 
									placeholder="IT22345678"
									value={formData.leader_studentID} 
									onChange={handleChange} 
								/>
								{errors.leader_studentID && <div className="invalid-feedback">{errors.leader_studentID}</div>}
          						{success.leader_studentID && <div className="valid-feedback">{success.leader_studentID}</div>}
							</div>
						</div>

						<div className="item item-6">
							<h4>Project details</h4>
							<div className="col-md-10 mb-1">
								<label for="validationServer01">Project title</label>
								<input 
									type="text" 
									className={`form-control ${(errors.project_title ? 'is-invalid' : '') || (success.project_title ? 'is-valid' : '')}`}
									name="project_title" 
									placeholder="Project Title"
									value={formData.project_title} 
									onChange={handleChange} 
								/>
								{errors.project_title && <div className="invalid-feedback">{errors.project_title}</div>}
								{success.project_title && <div className="valid-feedback">{success.project_title}</div>}
							</div>
							<div className="col-md-10 mb-1">
								<label for="validationServer02">Research area</label>
								<select 
									name="research_area" 
									className={`form-control ${(errors.research_area ? 'is-invalid' : '') || (success.research_area ? 'is-valid' : '')}`}
									value={formData.research_area} 
									onChange={handleChange}
								>
								  	<option value="">Select research area</option>
									<option value="Autonomous Intelligent Machines and Systems">Autonomous Intelligent Machines and Systems</option>
								  	<option value="Knowledg Inspired Computing">Knowledg Inspired Computing</option>
								  	<option value="Computing for Inclusiv and Equitable Society">Computing for Inclusiv and Equitable Society</option>
								</select>
								{errors.research_area && <div className="invalid-feedback">{errors.research_area}</div>}
								{success.research_area && <div className="valid-feedback">{success.research_area}</div>}
							</div>
                            <div class="col-md-10 mb-1">
								<label for="validationDefault03">Research group</label>
								<select 
									name="research_group" 
									className={`form-control ${(errors.research_group ? 'is-invalid' : '') || (success.research_group ? 'is-valid' : '')}`}
									value={formData.research_group} 
									onChange={handleChange}
								>
								  	<option value="">Select research group</option>
									<option value="Machine Learning">Machine Learning</option>
								  	<option value="Natural Language Processing">Natural Language Processing</option>
								  	<option value="Intelligent Systems">Intelligent Systems</option>
									<option value="Robotics">Robotics</option>
								</select>
								{errors.research_group && <div className="invalid-feedback">{errors.research_group}</div>}
								{success.research_group && <div className="valid-feedback">{success.research_group}</div>}
							</div>
                                
                            <div className="col-md-10 mb-1">
								<label for="validationServer04">supervisor</label>
								<select 
									name="supervisor" 
									className={`form-control ${(errors.supervisor ? 'is-invalid' : '') || (success.supervisor ? 'is-valid' : '')}`}
									value={formData.supervisor} 
									onChange={handleChange}
								>
								  	<option value="">Select supervisor</option>
									<option value="Mr. Prasanna Sumathipala">Mr. Prasanna Sumathipala</option>
								  	<option value="Dr. Dasuni Nawinna">Dr. Dasuni Nawinna</option>
								  	<option value="Dr . Anuradha Jayakody">Dr . Anuradha Jayakody</option>
								</select>
								{errors.supervisor && <div className="invalid-feedback">{errors.supervisor}</div>}
								{success.supervisor && <div className="valid-feedback">{success.supervisor}</div>}
							</div>

                            <div className="col-md-10 mb-1">
								<label for="validationServer04">Co-supervisor</label>
								<select 
									name="co_supervisor" 
									className={`form-control ${(errors.co_supervisor ? 'is-invalid' : '') || (success.co_supervisor ? 'is-valid' : '')}`}
									value={formData.co_supervisor} 
									onChange={handleChange}
								>
								  	<option value="">Select Co-supervisor</option>
									<option value="Mr. Kavinga Yapa Abeywardene">Mr. Kavinga Yapa Abeywardene</option>
								  	<option value="Mr. Samadhi Rathnayake">Mr. Samadhi Rathnayake</option>
								  	<option value="Ms. Supipi Sudeshika">Ms. Supipi Sudeshika</option>
								</select>
								{errors.co_supervisor && <div className="invalid-feedback">{errors.co_supervisor}</div>}
								{success.co_supervisor && <div className="valid-feedback">{success.co_supervisor}</div>}
							</div>
							<div className='btn-container'>
								<button type="submit" className="btn btn-primary">Submit</button>
							</div>
						</div>
					</div>
		  		</form>
		  	</div>  
        </div>
	);
}