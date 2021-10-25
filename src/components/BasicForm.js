import useInput from '../hooks/use-input';

const BasicForm = () => {
	const {
		value: enteredfirstName,
		hasError: firstNameHasError,
		isValid: firstNameIsValid,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstName
	} = useInput(value => value.trim());

	const {
		value: enteredLastName,
		hasError: lastNameHasError,
		isValid: lastNameIsValid,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastName
	} = useInput(value => value.trim());

	const {
		value: enteredEmail,
		hasError: emailHasError,
		isValid: emailIsValid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail
	} = useInput(value => value.includes('@'));

	let formIsValid = false;
	if(firstNameIsValid && lastNameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if(!formIsValid) {
			return;
		}

		console.log(enteredfirstName, enteredLastName);
		console.log(enteredEmail);
		resetFirstName();
		resetLastName();
		resetEmail();
	}

	const firstNameClasses = !firstNameHasError 
		? "form-control" 
		: "form-control invalid";

	const lastNameClasses = !lastNameHasError 
	? "form-control" 
	: "form-control invalid";

	const emailClasses = !emailHasError 
	? "form-control" 
	: "form-control invalid";

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="control-group">
				<div className={firstNameClasses}>
					<label htmlFor="name">First Name</label>
					<input 
						type="text" id="name"
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
						value={enteredfirstName}
					/>
					{firstNameHasError && <p className="error-text">Please enter valid value!</p>}
				</div>
				<div className={lastNameClasses}>
					<label htmlFor="name">Last Name</label>
					<input 
						type="text" id="name"
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
						value={enteredLastName}
					/>
					{lastNameHasError && <p className="error-text">Please enter valid value!</p>}
				</div>
			</div>
			<div className={emailClasses}>
				<label htmlFor="name">E-mail Address</label>
				<input 
					type="text" id="name"
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{emailHasError && <p className="error-text">Please enter valid email!</p>}

			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form> 
	)
};

export default BasicForm;