Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'dungeon-world-babele-es',
			lang: 'es',
			dir: 'compendium'
		});
	}
});
