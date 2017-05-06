export default  (Model, Test) =>{

	let schema_keys = Object.keys(Model);
	let test_keys = Object.keys(Test);

	let reportObj = {
		schema_keys: schema_keys,
		missing_fields: [],
		extra_fields: [],
		accepted_fields: [],
	};

	test_keys.forEach(test_key => {
		if(schema_keys.indexOf(test_key) === -1) {
			reportObj.extra_fields.push(test_key);
		}
	});

	schema_keys.forEach(schema_key => {
		if(!Test.hasOwnProperty(schema_key)) {
			reportObj.missing_fields.push(schema_key);
		}
		if(Test.hasOwnProperty(schema_key)) {
			reportObj.accepted_fields.push(schema_key);
		}
	});

	return reportObj;
};

