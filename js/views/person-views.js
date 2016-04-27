app = app || {};

app.views.Person = Backbone.View.extend({
	tagName: 'li',
	attributes: function() {
		return {
			class: 'person ' + this.model.get('type')
		};
	},


	template: _.template($('#person-template').html()),
});