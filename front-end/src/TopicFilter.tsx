import React, { useState, ChangeEvent, MouseEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/esm/Form';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';

const TopicFilter: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxClick = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, event.target.value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== event.target.value));
    }
    console.log(selectedOptions);
  };

  return (
    <NavDropdown title="Topic Filter" id={`offcanvasNavbarDropdown-expand-sm`}>
      <NavDropdown.Item href="#action3">
        <Form.Check
          type="checkbox"
          id={`checkbox-all`}
          label="All"
          value="All"
          onClick={handleCheckboxClick}
          onChange={handleCheckboxChange}
        />
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action5">
        <Form.Check
          type="checkbox"
          id={`checkbox-something`}
          label="Something else here"
          onClick={handleCheckboxClick}
          onChange={handleCheckboxChange}
        />
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default TopicFilter;

