class Macbook {
	constructor () {
			this.insurance = false
			this.memory = '4G'
	}

	cost() {
		return 1000
	}

	screenSize() {
		return 11.6
	}
}

// Decorator 1
function addMemory (macbook) {
	const price = macbook.cost()
	macbook.cost = () => price + 400
	macbook.memory = '8G'

	return macbook
}

// Decorator 2
function addInsurance (macbook) {
	const price = macbook.cost()
	macbook.cost = () => price + 200
	macbook.insurance = true

	return macbook
}


let mb = new Macbook()
console.log(mb.__proto__);
console.log('mb:',mb);
console.log('mb.cost():', mb.cost());
console.log('mb.insurance:', mb.insurance);
console.log('mb.screenSize():', mb.screenSize());
console.log('---------------------');
console.log('addMemory(mb).cost():', addMemory(mb).cost());
console.log('addInsurance(mb).cost():',addInsurance(mb).cost());
console.log('mb.insurance:', mb.insurance);
console.log('mb.memory:', mb.memory);
