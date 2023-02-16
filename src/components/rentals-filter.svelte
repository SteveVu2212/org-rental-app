<script>
	export let rentals;
	export let query;

	$: sanitisedQuery = query.toLowerCase().trim();

	$: results = query
		? rentals.filter((rental) => {
				return rental.title.toLowerCase().includes(sanitisedQuery);
		  })
		: rentals;
</script>

<slot {results} />
