app = app || {};

app.models.Person = Backbone.Model.extend({
	defaults: {
		'firstname': '',
		'lastname': '',
		'number': '',
		'cuisine': '',
		'maxspent': ''
	},
	
	initialize: function() {
		var self = this;
		if(this.get('cuisine') == 'mexican') {
			self.set('type', 'mexican');
		}
		if(this.get('cuisine') == 'nigerian') {
			self.set('type', 'nigerian');
		}

		if(this.get('cuisine') == 'thai') {
			self.set('type', 'thai');
		}

		if(this.get('cuisine') == 'chinese') {
			self.set('type', 'chinese');
		}

		if(this.get('cuisine') == 'vietnamese') {
			self.set('type', 'vietnamese');
		}

		if(this.get('cuisine') == 'jamaican') {
			self.set('type', 'jamaican');
		}

			else {
				self.set('type', 'No Preference');
			}
	}
	
});

app.collections.People = Backbone.Collection.extend({
	
	model: app.models.Person,
	
	comparator: function(person) {
		return person.get('lastname');
	}
});

