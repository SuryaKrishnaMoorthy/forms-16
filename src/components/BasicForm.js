import useInput from '../hooks/use-input';
const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = () => {
	const {
		value: enteredfirstName,
		hasError: firstNameHasError,
		isValid: firstNameIsValid,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstName
	} = useInput(isNotEmpty);

	const {
		value: enteredLastName,
		hasError: lastNameHasError,
		isValid: lastNameIsValid,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastName
	} = useInput(isNotEmpty);

	const {
		value: enteredEmail,
		hasError: emailHasError,
		isValid: emailIsValid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail
	} = useInput(isEmail);

	let formIsValid = false;
	if(firstNameIsValid && lastNameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const submitHandler = (event) => {
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
		<form onSubmit={submitHandler}>
			<div className="control-group">
				<div className={firstNameClasses}>
					<label htmlFor="name">First Name</label>
					<input 
						type="text" id="name"
						value={enteredfirstName}
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
					/>
					{firstNameHasError && <p className="error-text">Please enter first name!</p>}
				</div>
				<div className={lastNameClasses}>
					<label htmlFor="name">Last Name</label>
					<input 
						type="text" id="name"
						value={enteredLastName}
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
					/>
					{lastNameHasError && <p className="error-text">Please enter last name!</p>}
				</div>
			</div>
			<div className={emailClasses}>
				<label htmlFor="name">E-mail Address</label>
				<input 
					type="text" id="name"
					value={enteredEmail}
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
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