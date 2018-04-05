var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'A movie about a wizard',
        img: 'images/harry-potter.jpg'
    },
    {
        id: 2,
        title: 'The Lion King',
        desc: 'A movie about a king of the Pride Lands',
        img: 'images/lion-king.jpg'
    },
    {
        id: 3,
        title: 'Star Wars',
        desc: 'Fantasy story in space',
        img: 'images/star-wars.jpg'
    },
    {
        id: 4,
        title: 'Raiders of the Lost Ark',
        desc: 'Adventures of Indiana Jones - the archeologist',
        img: 'images/indiana-jones.jpg'
    }
];

var Movie = React.createClass({
    render: function() {
        return React.createElement('li', {key: this.props.movie.id},
            React.createElement('h2', {}, this.props.movie.title),
            React.createElement('p', {}, this.props.movie.desc),
            React.createElement('img', {src: this.props.movie.img})
        )
    },
    propTypes: {
        movie: React.PropTypes.object.isRequired
    }
});

//var moviesElements = movies.map(function(movie) {
//    return React.createElement('li', {key: movie.id},
//        React.createElement('h2', {}, movie.title),
//        React.createElement('p', {}, movie.desc),
//        React.createElement('img', {src: movie.img})
//    );
//});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Private Movie Database'),
        React.createElement(Movie, {key: movie.id})
    );

ReactDOM.render(element, document.getElementById('app'));
