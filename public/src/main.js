//jQuery to change the z-index of the form for adding a new fish to the document
//simple jQuery if statement to toggle the form, this accesses the nodes that are present and both toggles classes and adds or removes the attribute "placeholder" from the input boxes
$(() => {
	let toggle=0
	console.log(`script loaded`)
	$(`.toggleForm`).on(`click`, () => {
		if(toggle === 0) {
			console.log(`connected and working`)
			$(`.newFishForm`).toggleClass(`show`)
			$(`#submit`).toggleClass(`smallButton`)
			$(`#species`).attr(`placeholder`, `species`).toggleClass(`inputBoxStd`)
			$(`#weight`).attr(`placeholder`, `weight`).toggleClass(`inputBoxStd`)
			toggle=1
		}else{
			$(`.newFishForm`).toggleClass(`show`)
			$(`#submit`).toggleClass(`smallButton`)
			$(`#species`).attr(`placeholder`, ``).toggleClass(`inputBoxStd`)
			$(`#weight`).attr(`placeholder`, ``).toggleClass(`inputBoxStd`)
			toggle=0
		}
	})
});
