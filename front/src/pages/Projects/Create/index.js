import React, { useState, useCallback } from 'react';
import api from '../../../services/api';
import Button from '../../../components/Button';
import { Form, Input, Textarea } from '../../../components/Form';

function Create() {
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');

  const createProject = useCallback(
    e => {
      e.preventDefault();
      api
        .post('projects', {
          title,
          owner,
        })
        .then(response => console.log(response));
    },
    [title, owner]
  );

  return (
    <>
      <Button type="button" onClick={() => setActive(!active)}>
        Novo
      </Button>

      {active && (
        <Form onSubmit={createProject}>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Input
            type="text"
            name="owner"
            value={owner}
            onChange={e => setOwner(e.target.value)}
          />
          <Textarea type="text" name="description" value="asdasd" />
          <Button type="submit">Cadastrar</Button>
        </Form>
      )}
    </>
  );
}

export default Create;
