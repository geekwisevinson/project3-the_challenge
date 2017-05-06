export default (event,context) =>{

	if(!event){
		event = { target: { textContent: context.params.sortBy } }
	}
	const [ascClass, descClass] = [
		'mdl-data-table__header--sorted-ascending',
		'mdl-data-table__header--sorted-descending',
	];
	const [headers, activeHeaders] = [
		document.querySelectorAll(`.${descClass}`),
		document.querySelectorAll(`.${ascClass}`),
	];

	activeHeaders.forEach(function(el) {
		if(el.textContent !== event.target.textContent) {
			el.classList.remove(ascClass);
		}
	});

	headers.forEach(function(el) {
		if(el.textContent !== event.target.textContent) {
			el.classList.remove(descClass);
		}
	});

	if(event.target.classList.contains(ascClass)) {
		event.target.classList.remove(ascClass);
		event.target.classList.add(descClass);

		context.params.order = 'desc';
	} else {
		event.target.classList.remove(descClass);
		event.target.classList.add(ascClass);

		context.params.order = 'asc';
	}

	context.params.offset = 0;
	context.params.page = 1;
	context.params.sortBy = event.target.textContent;
	context.$router.push({
		path: `/${context.path}`,
		query: {page: context.params.page, term: context.params.search_value}
	});
	context.get();
}
