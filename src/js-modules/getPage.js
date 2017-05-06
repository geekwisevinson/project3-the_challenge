export default (direction, context) => {

	if(direction === 'prev') {
		if(context.params.page > 1) {
			context.params.offset -= context.params.limit;
			context.params.page--;
		}
	} else if(direction === 'next') {
		if(context.params.page < context.params.pages) {
			context.params.offset += context.params.limit;
			context.params.page++;
		}
	}
	context.$router.push({
		path: `/${context.path}`,
		query: {page: context.params.page, term: context.params.search_value}
	});
	context.get();
}
