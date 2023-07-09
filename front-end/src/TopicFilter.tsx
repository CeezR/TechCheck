import React, { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/esm/Form';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';

type TopicFilterProps = {
  topics: string[] | undefined
  selectedTopics: string[]
  setSelectedTopics : React.Dispatch<React.SetStateAction<string[]>>
}

const TopicFilter = ({topics, selectedTopics, setSelectedTopics} : TopicFilterProps) => {
  const [allChecked, setAllChecked] = useState<boolean>(true);

  const handleCheckboxClick = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'All' && topics) {
      setAllChecked(event.target.checked);
      setSelectedTopics(event.target.checked ? topics : []);
    } else {
      setAllChecked(false);
      if (event.target.checked) {
        setSelectedTopics([...selectedTopics, event.target.value]);
      } else {
        setSelectedTopics(selectedTopics.filter(option => option !== event.target.value));
      }
    }
  };

  return (
    <NavDropdown title="Topic Filter" id={`offcanvasNavbarDropdown-expand-sm`}>
        <Form.Check
          type="checkbox"
          id={`checkbox-all`}
          label="All"
          value="All"
          checked={allChecked}
          onClick={handleCheckboxClick}
          onChange={handleCheckboxChange}
          className="ms-3"
        />
      <NavDropdown.Divider />
      {Array.isArray(topics) && topics.map((topic, index) => {
        return (
            <Form.Check
              key={index}
              type="checkbox"
              id={`checkbox-${topic}`}
              label={topic}
              value={topic}
              checked={selectedTopics.includes(topic)}
              onClick={handleCheckboxClick}
              onChange={handleCheckboxChange}
              className="ms-3"
            />
        );
      })}
    </NavDropdown>
  );
};

export default TopicFilter;

