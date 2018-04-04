var GalleryItem = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, 'First component');
    }
});
