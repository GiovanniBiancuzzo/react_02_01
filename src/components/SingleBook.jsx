// Crea un componente SingleBook e questa volta dovrà essere un componente creato a funzione. Il componente riceve un oggetto corrispondente ad un singolo libro come prop, e visualizzerà la sua copertina e il titolo del libro.
// Usa le Card di react-bootstrap per renderizzare il libro (l’oggetto del libro può esser letto da un file .json che hai ricevuto ieri).
// Converti il tuo componente SingleBook in una classe, e crea il suo stato contenente una proprietà booleana selected.
// Cliccare sul SingleBook dovrà fare il toggle della proprietà selected. Se la proprietà selected sarà true, il SingleBook dovrà ricevere dello stile che rifletta il cambio di stato, visivamente.

import { Component } from "react";
import { Button, Card, Container } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
    state = {
        selected: false,
        commentsButton: false,
    };

    render() {
        return (
            <Container>
                <Card
                    style={{
                        width: "18rem",
                        // borderColor: this.state.selected ? "#dc3545" : "#212529",
                        // borderWidth: this.state.selected ? "10px" : "5px",
                        border: this.state.selected
                            ? "10px solid #dc3545"
                            : "3px solid #212529",
                    }}
                >
                    <Card.Img variant="top" src={this.props.book.img} />
                    <Card.Body>
                        <Card.Title>{this.props.book.title}</Card.Title>
                        <Card.Text>
                            <b>Genere</b>: {this.props.book.category}
                        </Card.Text>
                        <Card.Text>
                            <b>ASIN</b>: {this.props.book.asin}
                        </Card.Text>
                        <Button
                            variant="primary"
                            onClick={() =>
                                this.setState({
                                    selected: this.state.selected
                                        ? false
                                        : true,
                                })
                            }
                        >
                            {this.props.book.price} €
                        </Button>
                        <Button
                            variant="warning"
                            onClick={() => {
                                this.props.setAsin(this.props.book.asin);
                            }}
                        >
                            Commenti
                        </Button>
                    </Card.Body>
                </Card>
                {/* {this.state.commentsButton && ( //quando il pulsante commenti è cliccato
                    <CommentArea asinComment={this.props.book.asin} />
                )} */}
            </Container>
        );
    }
}
export default SingleBook;
