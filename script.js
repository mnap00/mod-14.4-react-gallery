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

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Private Movie Database'),
                React.createElement('ul', {},
                    this.props.movies.map(function(movie) {
                        return React.createElement(Movie,
                            {key: movie.id, movie: movie});
                    })
                )
            )
        );
    }
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDescription, {desc: this.props.movie.desc}),
                React.createElement(MovieImage, {img: this.props.movie.img})
            )
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        );
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        );
    }
});

var MovieImage = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('img', {src: this.props.img})
        );
    }
})

var element = React.createElement(MoviesList, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));
