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

//var MoviesList = React.createClass({
//    render: function() {
//        return React.createElement('div', {}.
//            React.createElement('h1', {}, 'Private Movie Database'),
//            //
//        )
//    }
//});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            React.createElement('li', {},
                React.createElement('h2', {}, this.props.movie.title),
                React.createElement('p', {}, this.props.movie.desc),
                React.createElement('img', {src: this.props.movie.img})
            )
        );
    }
});

//var MovieTitle

//var MovieDescription

//var MovieImage

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Private Movie Database'),
        React.createElement('ul', {},
            movies.map(function(movie) {
                return React.createElement(Movie, {key: movie.id, movie: movie});
            })
        )
    );

ReactDOM.render(element, document.getElementById('app'));
