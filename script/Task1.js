function Collection() {
	this.newCollection = [];
}

Object.prototype.from = function(array) {
	var values = array.join(',');
	return new Collection();
}

Collection.prototype.values = function() {
	return this.newCollection;
};

Collection.prototype.append = function(element) {
	this.newCollection.push(element);
};

Collection.prototype.count = function() {
	return this.newCollection.length;
};

Collection.prototype.removeAt = function(position) {
	var array = this.newCollection;
	if ((position > 0) && (position <= array.length)){
		array.splice(position - 1, 1);
		console.log('true');
		return true;
	} else {
		console.log('false');
		return false;
	}
}

Collection.prototype.at = function(position) {
	var array = this.newCollection;
	array.forEach(function(item, i, arr) {
		if (position === (i + 1)) {
			console.log(item);
			return item;
		} else {
			return null;
		}
	});
}

var a = new Collection();
var b = Collection.from([1,2,3]);
// a.append('a');
// a.append('b');
// a.append('c');
// a.removeAt();
// a.at();
// console.log(a.values());
//console.log(a.count());
console.log(b.values());
console.log(a instanceof Collection);
console.log(b instanceof Collection);