import React from "react";
import {
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";

const SearchBar = props => (
  <>
    <Row className=" justify-content-md-center">
      <Col xs xl="true">
        <Form>
          <Form.Group className="text-left" controlId="formSearchBar">
            <Form.Label>what</Form.Label>
            <Form.Text className="text-muted">
              name developer, initials first name developer
            </Form.Text>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Search
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onKeyDown={props.change}
                type="text"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  </>
);

export default SearchBar;
