import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import BoxCard from '../../components/BoxCard';
import { Table, TableLine, TableCol } from '../../components/Table';

import CreateProject from './Create';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('projects');
      setProjects(response.data);
    }

    loadProducts();
  }, []);

  return (
    <>
      <BoxCard classContent="no-bg">
        <CreateProject />
      </BoxCard>

      <BoxCard title="Lista de projetos">
        <Table>
          <TableLine className="head">
            <TableCol>Projeto</TableCol>
            <TableCol>Resposável</TableCol>
            <TableCol>Ações</TableCol>
          </TableLine>
          {projects.map(project => (
            <TableLine key={project.id}>
              <TableCol>{project.title}</TableCol>
              <TableCol>{project.owner}</TableCol>
              <TableCol>
                <button type="button">*</button>
              </TableCol>
            </TableLine>
          ))}
        </Table>
      </BoxCard>
    </>
  );
}

export default Projects;
