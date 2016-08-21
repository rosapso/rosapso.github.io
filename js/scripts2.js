var beerWDetails	=	{

	'PT'	:	{
		id:'#PT',
		brew:'Y',
		name:'Prime Time',
		type:'Pale Ale',
		abv:'4.5%',
		filter:'O',
		desc:'Brewed with Northwestern 2-row and a blend of Crystal malt. Light, Crisp and Citrusy to bring out that clean finish. Magnum, Cascade and Citra.'
	},
	'SF'	:	{
		id:'#SF',
		brew:'Y',
		name:'Scarlet Fire',
		type:'IPA',
		abv:'6.3%',
		filter:'I',
		desc:'Bigger and hoppy than Bhagwan\'s. Brewed with a technique known as First Wort Hopping. Creating a bold hop flavor and a floral hop flavor with a touch of grapefruit in the finish. Dry Hopped with Centennial'
	},
	'CC'	:	{
		id:'#CC',
		brew:'Y',
		name:'Coal Creek',
		type:'Porter',
		abv:'5.4%',
		filter:'O',
		desc:'A blend of dark malts and crystal malts gives our Porter a rich and smooth texture with a chocolaty finish. Hopped with Magnum, Liberty and Centennial.'
	},
	'FK'	:	{
		id:'#FK',
		brew:'N',		
		name:'Fatt Katt',
		type:'Kolsch',
		abv:'5.3%',
		filter:'O',
		desc:'Crisp, Clean and Refreshing Kolsch style ale with a little fruitiness from the yeast makes this an easy drinking beer that does down easy. German Magnum and Saaz.'
	},
	'LD'	:	{
		id:'#LD',
		brew:'Y',		
		name:'Ludacris',
		type:'Imperial IPA',
		abv:'7.6%',
		filter:'I',
		desc:'Named for the Ludacris amount of hops used through-out this brew. Making this a big and juicy double IPA. Kicking off with big notes of stone fruit and fading into dank pine. The smell alone keeps you coming back.'
	},	
	'IC'	:	{
		id:'#IC',
		brew:'Y',		
		name:'Icculus',
		type:'IPA',
		abv:'5.8%',
		filter:'I',
		desc:'A true crowd favorite. Brewed with Nelson Sauvin, Citra and a touch of Amarillo and Cascade. Creating a solid citrus profile. 2 row, Crystal 15, Wheat and Vienna malts.'
	},
	'NT'	:	{
		id:'#NT',
		brew:'N',		
		name:'Naked Time',
		type:'Saison',
		abv:'5.2%',
		filter:'S',
		desc:'A light and easy drinking Belgium style Saison. Brewed with Orange Curacao zest and Equinox hops opsHto bring out the light fruit and peppery notes of the yeast.  A collaboration with Naked City Brewing.'
	},
	'OS'	:	{
		id:'#OS',
		brew:'N',		
		name:'Old Sol',
		type:'Wheatwine',
		abv:'9.3%',
		filter:'S',
		desc:'A sweet malt nose with fruit amd bread notes that fade to soft caramel. A full bodied beer with a nice warm finish.'
	},	
	'AA'	:	{
		id:'#AA',
		brew:'Y',
		name:'Atlas Amber',
		type:'Amber Ale',
		abv:'4.5%',
		filter:'O',
		desc:'Pale, crystal, and munich with a touch of chocolate malt for color. Malty sweetness starts this classic amber off with just enough hops to balance out the rich malt character.'
	},
	'BB'	:	{
		id:'#BB',
		brew:'Y',
		name:'Baghwan\'s Best',
		type:'IPA',
		abv:'6.0%',
		filter:'I',
		desc:'A balanced English inspired IPA with a West Coast twist. Our first IPA and a Washington beer changer. Leadning the way for more to com. Brewed with Magnum, Columbus, Cascade and Centennial. Dry hopped with Cascade.' 
	},
	'SB'	:	{
		id:'#SB',
		brew:'Y',
		name:'SunBreak Blond Ale',
		type:'Blond ale',
		abv:'5.4%',
		filter:'O',
		desc:'Light and easy drinking. Golden in color with slightly malty sweetness.'
	},
	'OM'	:	{
		id:'#OM',
		brew:'Y',
		name:'Oktoberfest Marzen',
		type:'Marzen',
		abv:'5.1%',
		filter:'S',
		desc:'A true fest beer. Brewed with German traditions in mind. A malty start with bread and cracker tones.'
	},
	'HP'	:	{
		id:'#HP',
		brew:'Y',
		name:'Hopgoblin Pumpkin Ale',
		type:'Pumpkin Ale',
		abv:'5.2%',
		filter:'S',
		desc:'Over 110 pounds of pumpkin meat and a blend of nutmeg, ginger, allspice, cinnamon and clove makes you remember Grandma\'s home made pie.'
	},
	'AZ'	:	{
		id:'#AZ',
		brew:'Y',
		name:'Azacca Session',
		type:'IPA',
		abv:'4.9%',
		filter:'I',
		desc:'This India Session Ale starts with fresh cut pears and apples in the nose. Then fades to pine with a dry clean bitterness. brewed with Magnum, Azacca, and Mosaic.'
	}
};

var menuWDetails	=	{

	'ChPiz'	:	{
		id:'#ChPiz',
		name:'Cheese Pizza',
		filter:'P',
		price:'8\" - $9.95, 12\" - $12.95, 16\" - $14.95',
		desc:'Classic cheese pizza. An always favorite!'
	},
	'PepPiz'	:	{
		id:'#PepPiz',
		name:'Pepperoni Pizza',
		filter:'P',	
		price:'8\" - $11.50, 12\" - $15.50, 16\" - $18.80',
		desc:'The grand staple of every family get together, big game, and LAN party.'
	},
	'MargPiz'	:	{
		id:'#MargPiz',
		name:'Margherita',
		filter:'P',	
		price:'8\" - $13.50, 12\" - $18.95, 16\" - $22.25',
		desc:'Parmesan, roma tomatoes, roasted garlic, fresh basil.'
	},
	'HawPiz'	:	{
		id:'#HawPiz',
		name:'Hawaiian',
		filter:'P',	
		price:'8\" - $14.95, 12\" - $19.95, 16\" - $22.95',
		desc:'Canadian bacon, pineapple.'
	},
	'SupPiz'	:	{
		id:'#SupPiz',
		name:'Supreme',
		filter:'P',	
		price:'8\" - $14.95, 12\" - $19.75, 16\" - $22.95',
		desc:'Italian sausage, red onion, black olives, roasted red peppers, green onion, mushroom.'
	},
	'PesPiz'	:	{
		id:'#PesPiz',
		name:'Pesto Veggie',
		filter:'P',	
		price:'8\" - $14.95, 12\" - $19.75, 16\" - $22.95',
		desc:'Fresh pesto, spinach, red onion, roasted red peppers, artichoke hearts.'
	},
	'BbqPiz'	:	{
		id:'#BbqPiz',
		name:'Bbq Chicken',
		filter:'P',	
		price:'8\" - $14.95, 12\" - $19.75, 16\" - $22.95',
		desc:'Porter BBQ sauce, chicken, red onion, roasted red peppers, green onion.'
	},
	'AllPiz'	:	{
		id:'#AllPiz',
		name:'All Meat',
		filter:'P',	
		price:'8\" - $14.95, 12\" - $19.75, 16\" - $22.95',
		desc:'Provolone, pepperoni, sausage, coppa salami, canadian bacon.'
	},
	'PeaPiz'	:	{
		id:'#PeaPiz',
		name:'Pear and Gorgonzola',
		filter:'P',	
		price:'8\" - $14.95, 12\" - $19.95, 16\" - $22.95',
		desc:'Garlic oil base, poached pear, coppa, gorgonzola.'
	},
	'VegPiz'	:	{
		id:'#VegPiz',
		name:'Classic Veggie',
		filter:'P',	
		price:'8\" - $14.95, 12\" - $19.95, 16\" - $22.95',
		desc:'Red onion, kalamata, spinach, garlic, roma tomatoes, green onion.'
	},
	'GrePiz'	:	{
		id:'#GrePiz',
		name:'The Greek',
		filter:'P',	
		price:'8\" - $14.95, 12\" - $19.95, 16\" - $22.95',
		desc:'Pesto base, chicken, mushrooms, spinach, red onion, goat cheese.'
	},
	'CbrPiz'	:	{
		id:'#CbrPiz',
		name:'Chicken Bacon Ranch',
		filter:'P',	
		price:'8\" - $14.95, 12\" - $19.95, 16\" - $22.95',
		desc:'House made ranch dressing base, chicken, bacon, garlic, green onion, red onion, roma tomatoes.'
	},
	'CaeSal'	:	{
		id:'#CaeSal',
		name:'Caesar',
		filter:'S',	
		price:'$7.99',
		desc:'Chopped romaine, garlic croutons, parmesan, and anchovy dressing.'
	},
	'PanSal'	:	{
		id:'#PanSal',
		name:'Panzanella Salad',
		filter:'S',	
		price:'$9.99',
		desc:'Mixed greens, toasted rustic bread, coppa, mozzarella, tomato, kalamata olices, basil vinagrette.'
	},
	'SpiSal'	:	{
		id:'#SpiSal',
		name:'Spinach Salad',
		filter:'S',	
		price:'$9.99',
		desc:'Mixed greens, crimini mushrooms, poached pear, chevre, slivered almonds, cranberries, balsamic vinagrette.'
	},
	'GreSal'	:	{
		id:'#GreSal',
		name:'Greek Salad',
		filter:'S',	
		price:'$7.99',
		desc:'Romaine, red onion, cucumber, kalamatas, feta, tomato, toasted garlic vinagrette.'
	},
	'BbqWch'	:	{
		id:'#BbqWch',
		name:'BBQ Pulled Pork',
		filter:'W',	
		price:'$9.99',
		desc:'Home smoked pork, Coal Creek Porter BBQ sauce, pepper jack, pepperoncinis on a roll.'
	},
	'RubWch'	:	{
		id:'#RubWch',
		name:'Reuben',
		filter:'W',	
		price:'$9.99',
		desc:'Porter braised corned beef, pastrami, Russian dressing, sauerkraut, swiss on rye.'
	},
	'ItaWch'	:	{
		id:'#ItaWch',
		name:'Italian Grinder',
		filter:'W',	
		price:'$9.99',
		desc:'Pepperoni, salami, sausage, mozzarella, roasted red peppers, pepperoncinis on ciabatta.'
	},
	'TbhWch'	:	{
		id:'#TbhWch',
		name:'Turkey, Bacon, Havarti',
		filter:'W',	
		price:'$9.99',
		desc:'Avocado, red onion, tomato, lettuce, mayo on sourdough.'
	},
	'VegWch'	:	{
		id:'#VegWch',
		name:'Roasted Veggie',
		filter:'W',	
		price:'$8.50',
		desc:'Roasted portabello mushroom, roasted red pepper, chevre, sun-dried tomatoes, arugula, basil aioli on a roll.'
	},
	'CubWch'	:	{
		id:'#CubWch',
		name:'Cuban',
		filter:'W',	
		price:'$9.99',
		desc:'Pork, ham, mojo sauce, pickles, mustard, swiss on a baguette.'
	},
	'MacEnt'	:	{
		id:'#MacEnt',
		name:'Mac & Cheese & Side Salad',
		filter:'E',	
		price:'$8.99',
		desc:'Homemade garlic cheese sauce with penne pasta.'
	},
	'SheEnt'	:	{
		id:'#SheEnt',
		name:'Shepherd\'s Pie & Side Salad',
		filter:'E',	
		price:'$10.99',
		desc:'Fresh ground lamb, English peas, corn, carrot, onion, garlic & topped with mashed potatoes and cheese.'
	},
	'BtbEnt'	:	{
		id:'#BtbEnt',
		name:'Big Time Beef & Stew',
		filter:'E',	
		price:'cup $5.99, bowl $8.99',
		desc:'Fresh chuck, celery, carrot, onion, potato in old fashioned beef broth with fresh bread..'
	},
	'BasNch'	:	{
		id:'#BasNch',
		name:'Basic Nachos',
		filter:'N',	
		price:'$6.50',
		desc:'Jack & cheddar cheese, jalapenos, salsa, green onions.'
	},'WorNch'	:	{
		id:'#WorNch',
		name:'The Works',
		filter:'N',	
		price:'$10.00',
		desc:'Basic Nachos plus sour cream, olives, black bean dip, guacamole.'
	},
	'VerNch'	:	{
		id:'#VerNch',
		name:'Verde Nachos',
		filter:'N',	
		price:'$10.99',
		desc:'Smoked pork, salsa verde, jack & cheddar cheese, black bean dip.'
	},
	'BarNch'	:	{
		id:'#BarNch',
		name:'The Barbarian',
		filter:'N',	
		price:'$10.99',
		desc:'House made Italian sausage, chicken, salsa, sour cream, dived tomatoes, green onion, jalapenos.'
	},
	'BasFri'	:	{
		id:'#BasFri',
		name:'Fries',
		filter:'F',	
		price:'$5.25, additional sauces $.75',
		desc:'With two dipping sauces: ranch, tartar, chili ketchup, Thai chili mayo, chipotle ranch, ketchup.'
	},
	'GarFri'	:	{
		id:'#GarFri',
		name:'Garlic Fries',
		filter:'F',	
		price:'$6.99',
		desc:'Roasted garlic and mozarrella with your choice of a sauce: ranch, tarter, chili ketchup, Thai chili mayo, chipotle ranch, ketchup.'
	},
	'ChiHhr'	:	{
		id:'#ChiHhr',
		name:'Chips & Salsa',
		filter:'H',	
		price:'$3.00',
		desc:'Tortilla and house made salsa.'
	},
	'GarHhr'	:	{
		id:'#GarHhr',
		name:'Garlic Cheese Pizza Bread',
		filter:'H',	
		price:'$3.99',
		desc:'Garlic and mozarella baked onto crust.'
	},
	'BasHhr'	:	{
		id:'#BasHhr',
		name:'Basic Nachos',
		filter:'H',	
		price:'$3.99',
		desc:'Jack & cheddar cheese, jalapenos, salsa, green onions.'
	},
	'FriHhr'	:	{
		id:'#FriHhr',
		name:'Fries & Dipping Sauce',
		filter:'H',	
		price:'$3.99',
		desc:'Choice of one dipping sauce: ranch, tarter, chili ketchup, Thai chili mayo, chipotle ranch, ketchup.'
	}
};

$('#pour').on('click', function()	{
	revealOnTap(beerWDetails, menuWDetails);
});

$('#brewing').on('click', function()	{
	revealBrewing(beerWDetails);
});

$('#beerRevealLive').on('click', function()	{
	revealOnTap(beerWDetails);
});

$('#ipaRevealLive').on('click', function()	{
	revealIPALive(beerWDetails);
});

$('#seasonalRevealLive').on('click', function()	{
	revealSeasonalLive(beerWDetails);
});

$('#otherRevealLive').on('click', function()	{
	revealOtherLive(beerWDetails);
});

$('#beerRevealDead').on('click', function()	{
	revealBrewing(beerWDetails);
});

$('#ipaRevealDead').on('click', function()	{
	revealIPADead(beerWDetails);
});

$('#seasonalRevealDead').on('click', function()	{
	revealSeasonalDead(beerWDetails);
});

$('#otherRevealDead').on('click', function()	{
	revealOtherDead(beerWDetails);
});

$('#cook').on('click', function()	{
	revealFood(menuWDetails, beerWDetails);
});

$('#pizza').on('click', function()	{
	revealPizza(menuWDetails);
});

$('#salad').on('click', function()	{
	revealSalad(menuWDetails);
});

$('#sandwich').on('click', function()	{
	revealSandwich(menuWDetails);
});

$('#entree').on('click', function()	{
	revealEntree(menuWDetails);
});

$('#nacho').on('click', function()	{
	revealNachos(menuWDetails);
});

$('#fries').on('click', function()	{
	revealFries(menuWDetails);
});

$('#brew').on('click', function()	{
	revealBrewing(menuWDetails, beerWDetails);
});

function revealOnTap(beerList, foodList)	{
	$('#allBeerLive').removeClass('hiding');
	$('#ipasLive').removeClass('hiding');
	$('#seasonalLive').removeClass('hiding');
	$('#otherBeerLive').removeClass('hiding');
	$('#allBeerDead').addClass('hiding');
	$('#ipasDead').addClass('hiding');
	$('#seasonalDead').addClass('hiding');
	$('#otherBeerDead').addClass('hiding');	
	$('#pizza').addClass('hiding');
	$('#salad').addClass('hiding');
	$('#sandwich').addClass('hiding');
	$('#entree').addClass('hiding');
	$('#nacho').addClass('hiding');
	$('#fries').addClass('hiding');
	for(var index in beerList)	{
		if(beerList[index].brew == 'Y')	{
			$(beerList[index].id).removeClass('hiding');
		}
		if(beerList[index].brew == 'N')	{
			$(beerList[index].id).addClass('hiding');
		}
	}	
	for(var index in foodList)	{
		$(foodList[index].id).addClass('hiding');
	}
}

function revealBrewing(beerList, foodList)	{
	$('#allBeerDead').removeClass('hiding');
	$('#ipasDead').removeClass('hiding');
	$('#seasonalDead').removeClass('hiding');
	$('#otherBeerDead').removeClass('hiding');
	$('#allBeerLive').addClass('hiding');
	$('#ipasLive').addClass('hiding');
	$('#seasonalLive').addClass('hiding');
	$('#otherBeerLive').addClass('hiding');	
	$('#pizza').addClass('hiding');
	$('#salad').addClass('hiding');
	$('#sandwich').addClass('hiding');
	$('#entree').addClass('hiding');
	$('#nacho').addClass('hiding');
	$('#fries').addClass('hiding');
	for(var index in beerList)	{
		if(beerList[index].brew == 'N')	{
			$(beerList[index].id).removeClass('hiding');
		}
		if(beerList[index].brew == 'Y')	{
			$(beerList[index].id).addClass('hiding');
		}
	}	
	for(var index in foodList)	{
		$(foodList[index].id).addClass('hiding');
	}
}

function revealFood(foodList, beerList)	{
	$('#pizza').removeClass('hiding');
	$('#salad').removeClass('hiding');
	$('#sandwich').removeClass('hiding');
	$('#entree').removeClass('hiding');
	$('#nacho').removeClass('hiding');
	$('#fries').removeClass('hiding');
	$('#allBeerLive').addClass('hiding');
	$('#ipasLive').addClass('hiding');
	$('#seasonalLive').addClass('hiding');
	$('#otherBeerLive').addClass('hiding');
	$('#allBeerDead').addClass('hiding');
	$('#ipasDead').addClass('hiding');
	$('#seasonalDead').addClass('hiding');
	$('#otherBeerDead').addClass('hiding');
	for(var index in foodList)	{
		if(foodList[index].filter == 'P')	{
			$(foodList[index].id).removeClass('hiding');
		}
		if(foodList[index].filter != 'P')	{
			$(foodList[index].id).addClass('hiding');
		}
	}
	for(var index in beerList)	{
		$(beerList[index].id).addClass('hiding');
	}
}

function revealIPALive(beerList)	{
	for(var index in beerList)	{
		if(beerList[index].filter == 'I' && beerList[index].brew == 'Y')	{
			$(beerList[index].id).removeClass('hiding');
		}
		if(beerList[index].filter != 'I')	{
			$(beerList[index].id).addClass('hiding');
		}
	}
}

function revealSeasonalLive(beerList)	{
	for(var index in beerList)	{
		if(beerList[index].filter == 'S' && beerList[index].brew == 'Y')	{
			$(beerList[index].id).removeClass('hiding');
		}
		if(beerList[index].filter != 'S')	{
			$(beerList[index].id).addClass('hiding');
		}
	}
}

function revealOtherLive(beerList)	{
	for(var index in beerList)	{
		if(beerList[index].filter == 'O' && beerList[index].brew == 'Y')	{
			$(beerList[index].id).removeClass('hiding');
		}
		if(beerList[index].filter != 'O')	{
			$(beerList[index].id).addClass('hiding');
		}
	}
}

function revealIPADead(beerList)	{
	for(var index in beerList)	{
		if(beerList[index].filter == 'I' && beerList[index].brew == 'N')	{
			$(beerList[index].id).removeClass('hiding');
		}
		if(beerList[index].filter != 'I')	{
			$(beerList[index].id).addClass('hiding');
		}
	}
}

function revealSeasonalDead(beerList)	{
	for(var index in beerList)	{
		if(beerList[index].filter == 'S' && beerList[index].brew == 'N')	{
			$(beerList[index].id).removeClass('hiding');
		}
		if(beerList[index].filter != 'S')	{
			$(beerList[index].id).addClass('hiding');
		}
	}
}

function revealOtherDead(beerList)	{
	for(var index in beerList)	{
		if(beerList[index].filter == 'O' && beerList[index].brew == 'N')	{
			$(beerList[index].id).removeClass('hiding');
		}
		if(beerList[index].filter != 'O')	{
			$(beerList[index].id).addClass('hiding');
		}
	}
}

function revealPizza(foodList)	{
	for(var index in foodList)	{
		if(foodList[index].filter == 'P')	{
			$(foodList[index].id).removeClass('hiding');
		}
		if(foodList[index].filter != 'P')	{
			$(foodList[index].id).addClass('hiding');
		}
	}
}

function revealSandwich(foodList)	{
	for(var index in foodList)	{
		if(foodList[index].filter == 'W')	{
			$(foodList[index].id).removeClass('hiding');
		}
		if(foodList[index].filter != 'W')	{
			$(foodList[index].id).addClass('hiding');
		}
	}
}

function revealSalad(foodList)	{
	for(var index in foodList)	{
		if(foodList[index].filter == 'S')	{
			$(foodList[index].id).removeClass('hiding');
		}
		if(foodList[index].filter != 'S')	{
			$(foodList[index].id).addClass('hiding');
		}
	}
}

function revealFries(foodList)	{
	for(var index in foodList)	{
		if(foodList[index].filter == 'F')	{
			$(foodList[index].id).removeClass('hiding');
		}
		if(foodList[index].filter != 'F')	{
			$(foodList[index].id).addClass('hiding');
		}
	}
}

function revealNachos(foodList)	{
	for(var index in foodList)	{
		if(foodList[index].filter == 'N')	{
			$(foodList[index].id).removeClass('hiding');
		}
		if(foodList[index].filter != 'N')	{
			$(foodList[index].id).addClass('hiding');
		}
	}
}

function revealEntree(foodList)	{
	for(var index in foodList)	{
		if(foodList[index].filter == 'E')	{
			$(foodList[index].id).removeClass('hiding');
		}
		if(foodList[index].filter != 'E')	{
			$(foodList[index].id).addClass('hiding');
		}
	}
}

$('#SF').on('click', function()	{
	$(itemName).text(beerWDetails.SF.name);
	$(detail).text(beerWDetails.SF.type);
	$(description).text(beerWDetails.SF.desc);
	$(alcohol).text(beerWDetails.SF.abv);	
});

$('#CC').on('click', function()	{
	$(itemName).text(beerWDetails.CC.name);
	$(detail).text(beerWDetails.CC.type);
	$(description).text(beerWDetails.CC.desc);
	$(alcohol).text(beerWDetails.CC.abv);	
});

$('#FK').on('click', function()	{
	$(itemName).text(beerWDetails.FK.name);
	$(detail).text(beerWDetails.FK.type);
	$(description).text(beerWDetails.FK.desc);
	$(alcohol).text(beerWDetails.FK.abv);	
});

$('#LD').on('click', function()	{
	$(itemName).text(beerWDetails.LD.name);
	$(detail).text(beerWDetails.LD.type);
	$(description).text(beerWDetails.LD.desc);
	$(alcohol).text(beerWDetails.PT.abv);	
});

$('#PT').on('click', function()	{
	$(itemName).text(beerWDetails.PT.name);
	$(detail).text(beerWDetails.PT.type);
	$(description).text(beerWDetails.PT.desc);
	$(alcohol).text(beerWDetails.PT.abv);	
});

$('#IC').on('click', function()	{
	$(itemName).text(beerWDetails.IC.name);
	$(detail).text(beerWDetails.IC.type);
	$(description).text(beerWDetails.IC.desc);
	$(alcohol).text(beerWDetails.IC.abv);	
});

$('#NT').on('click', function()	{
	$(itemName).text(beerWDetails.NT.name);
	$(detail).text(beerWDetails.NT.type);
	$(description).text(beerWDetails.NT.desc);
	$(alcohol).text(beerWDetails.NT.abv);	
});

$('#OS').on('click', function()	{
	$(itemName).text(beerWDetails.OS.name);
	$(detail).text(beerWDetails.OS.type);
	$(description).text(beerWDetails.OS.desc);
	$(alcohol).text(beerWDetails.OS.abv);	
});

$('#AA').on('click', function()	{
	$(itemName).text(beerWDetails.AA.name);
	$(detail).text(beerWDetails.AA.type);
	$(description).text(beerWDetails.AA.desc);
	$(alcohol).text(beerWDetails.AA.abv);	
});

$('#BB').on('click', function()	{
	$(itemName).text(beerWDetails.BB.name);
	$(detail).text(beerWDetails.BB.type);
	$(description).text(beerWDetails.BB.desc);
	$(alcohol).text(beerWDetails.BB.abv);	
});

$('#SB').on('click', function()	{
	$(itemName).text(beerWDetails.SB.name);
	$(detail).text(beerWDetails.SB.type);
	$(description).text(beerWDetails.SB.desc);
	$(alcohol).text(beerWDetails.SB.abv);	
});

$('#OM').on('click', function()	{
	$(itemName).text(beerWDetails.OM.name);
	$(detail).text(beerWDetails.OM.type);
	$(description).text(beerWDetails.OM.desc);
	$(alcohol).text(beerWDetails.OM.abv);	
});

$('#HP').on('click', function()	{
	$(itemName).text(beerWDetails.HP.name);
	$(detail).text(beerWDetails.HP.type);
	$(description).text(beerWDetails.HP.desc);
	$(alcohol).text(beerWDetails.HP.abv);	
});

$('#AZ').on('click', function()	{
	$(itemName).text(beerWDetails.AZ.name);
	$(detail).text(beerWDetails.AZ.type);
	$(description).text(beerWDetails.AZ.desc);
	$(alcohol).text(beerWDetails.AZ.abv);	
});

$('#ChPiz').on('click', function()	{
	$(itemName).text(menuWDetails.ChPiz.name);
	$(detail).text(menuWDetails.ChPiz.price);
	$(description).text(menuWDetails.ChPiz.desc);
});

$('#PepPiz').on('click', function()	{
	$(itemName).text(menuWDetails.PepPiz.name);
	$(detail).text(menuWDetails.PepPiz.price);
	$(description).text(menuWDetails.PepPiz.desc);
});

$('#MargPiz').on('click', function()	{
	$(itemName).text(menuWDetails.MargPiz.name);
	$(detail).text(menuWDetails.MargPiz.price);
	$(description).text(menuWDetails.MargPiz.desc);
});

$('#HawPiz').on('click', function()	{
	$(itemName).text(menuWDetails.HawPiz.name);
	$(detail).text(menuWDetails.HawPiz.price);
	$(description).text(menuWDetails.HawPiz.desc);
});

$('#SupPiz').on('click', function()	{
	$(itemName).text(menuWDetails.SupPiz.name);
	$(detail).text(menuWDetails.SupPiz.price);
	$(description).text(menuWDetails.SupPiz.desc);
});

$('#PesPiz').on('click', function()	{
	$(itemName).text(menuWDetails.PesPiz.name);
	$(detail).text(menuWDetails.PesPiz.price);
	$(description).text(menuWDetails.PesPiz.desc);
});

$('#BbqPiz').on('click', function()	{
	$(itemName).text(menuWDetails.BbqPiz.name);
	$(detail).text(menuWDetails.BbqPiz.price);
	$(description).text(menuWDetails.BbqPiz.desc);
}); 

$('#AllPiz').on('click', function()	{
	$(itemName).text(menuWDetails.AllPiz.name);
	$(detail).text(menuWDetails.AllPiz.price);
	$(description).text(menuWDetails.AllPiz.desc);
}); 

$('#PeaPiz').on('click', function()	{
	$(itemName).text(menuWDetails.PeaPiz.name);
	$(detail).text(menuWDetails.PeaPiz.price);
	$(description).text(menuWDetails.PeaPiz.desc);
}); 

$('#VegPiz').on('click', function()	{
	$(itemName).text(menuWDetails.VegPiz.name);
	$(detail).text(menuWDetails.VegPiz.price);
	$(description).text(menuWDetails.VegPiz.desc);
}); 

$('#GrePiz').on('click', function()	{
	$(itemName).text(menuWDetails.GrePiz.name);
	$(detail).text(menuWDetails.GrePiz.price);
	$(description).text(menuWDetails.GrePiz.desc);
}); 

$('#CbrPiz').on('click', function()	{
	$(itemName).text(menuWDetails.CbrPiz.name);
	$(detail).text(menuWDetails.CbrPiz.price);
	$(description).text(menuWDetails.CbrPiz.desc);
}); 

$('#CaeSal').on('click', function()	{
	$(itemName).text(menuWDetails.CaeSal.name);
	$(detail).text(menuWDetails.CaeSal.price);
	$(description).text(menuWDetails.CaeSal.desc);
}); 

$('#PanSal').on('click', function()	{
	$(itemName).text(menuWDetails.PanSal.name);
	$(detail).text(menuWDetails.PanSal.price);
	$(description).text(menuWDetails.PanSal.desc);
}); 

$('#SpiSal').on('click', function()	{
	$(itemName).text(menuWDetails.SpiSal.name);
	$(detail).text(menuWDetails.SpiSal.price);
	$(description).text(menuWDetails.SpiSal.desc);
}); 

$('#GreSal').on('click', function()	{
	$(itemName).text(menuWDetails.GreSal.name);
	$(detail).text(menuWDetails.GreSal.price);
	$(description).text(menuWDetails.GreSal.desc);
}); 

$('#BbqWch').on('click', function()	{
	$(itemName).text(menuWDetails.BbqWch.name);
	$(detail).text(menuWDetails.BbqWch.price);
	$(description).text(menuWDetails.BbqWch.desc);
}); 

$('#RubWch').on('click', function()	{
	$(itemName).text(menuWDetails.RubWch.name);
	$(detail).text(menuWDetails.RubWch.price);
	$(description).text(menuWDetails.RubWch.desc);
}); 

$('#ItaWch').on('click', function()	{
	$(itemName).text(menuWDetails.ItaWch.name);
	$(detail).text(menuWDetails.ItaWch.price);
	$(description).text(menuWDetails.ItaWch.desc);
}); 

$('#TbhWch').on('click', function()	{
	$(itemName).text(menuWDetails.TbhWch.name);
	$(detail).text(menuWDetails.TbhWch.price);
	$(description).text(menuWDetails.TbhWch.desc);
}); 

$('#VegWch').on('click', function()	{
	$(itemName).text(menuWDetails.VegWch.name);
	$(detail).text(menuWDetails.VegWch.price);
	$(description).text(menuWDetails.VegWch.desc);
}); 

$('#CubWch').on('click', function()	{
	$(itemName).text(menuWDetails.CubWch.name);
	$(detail).text(menuWDetails.CubWch.price);
	$(description).text(menuWDetails.CubWch.desc);
}); 

$('#MacEnt').on('click', function()	{
	$(itemName).text(menuWDetails.MacEnt.name);
	$(detail).text(menuWDetails.MacEnt.price);
	$(description).text(menuWDetails.MacEnt.desc);
}); 

$('#SheEnt').on('click', function()	{
	$(itemName).text(menuWDetails.SheEnt.name);
	$(detail).text(menuWDetails.SheEnt.price);
	$(description).text(menuWDetails.SheEnt.desc);
}); 

$('#BtbEnt').on('click', function()	{
	$(itemName).text(menuWDetails.BtbEnt.name);
	$(detail).text(menuWDetails.BtbEnt.price);
	$(description).text(menuWDetails.BtbEnt.desc);
}); 

$('#BasNch').on('click', function()	{
	$(itemName).text(menuWDetails.BasNch.name);
	$(detail).text(menuWDetails.BasNch.price);
	$(description).text(menuWDetails.BasNch.desc);
}); 

$('#WorNch').on('click', function()	{
	$(itemName).text(menuWDetails.WorNch.name);
	$(detail).text(menuWDetails.WorNch.price);
	$(description).text(menuWDetails.WorNch.desc);
}); 

$('#VerNch').on('click', function()	{
	$(itemName).text(menuWDetails.VerNch.name);
	$(detail).text(menuWDetails.VerNch.price);
	$(description).text(menuWDetails.VerNch.desc);
}); 

$('#BarNch').on('click', function()	{
	$(itemName).text(menuWDetails.BarNch.name);
	$(detail).text(menuWDetails.BarNch.price);
	$(description).text(menuWDetails.BarNch.desc);
}); 

$('#BasFri').on('click', function()	{
	$(itemName).text(menuWDetails.BasFri.name);
	$(detail).text(menuWDetails.BasFri.price);
	$(description).text(menuWDetails.BasFri.desc);
}); 

$('#GarFri').on('click', function()	{
	$(itemName).text(menuWDetails.GarFri.name);
	$(detail).text(menuWDetails.GarFri.price);
	$(description).text(menuWDetails.GarFri.desc);
}); 

$('#ChiHhr').on('click', function()	{
	$(itemName).text(menuWDetails.ChiHhr.name);
	$(detail).text(menuWDetails.ChiHhr.price);
	$(description).text(menuWDetails.ChiHhr.desc);
}); 

$('#GarHhr').on('click', function()	{
	$(itemName).text(menuWDetails.GarHhr.name);
	$(detail).text(menuWDetails.GarHhr.price);
	$(description).text(menuWDetails.GarHhr.desc);
}); 

$('#BasHhr').on('click', function()	{
	$(itemName).text(menuWDetails.BasHhr.name);
	$(detail).text(menuWDetails.BasHhr.price);
	$(description).text(menuWDetails.BasHhr.desc);
}); 

$('#FriHhr').on('click', function()	{
	$(itemName).text(menuWDetails.FriHhr.name);
	$(detail).text(menuWDetails.FriHhr.price);
	$(description).text(menuWDetails.FriHhr.desc);
});
