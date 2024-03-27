import './Workers.css';

import { usePersonContext } from '../../context/PersonContext';

const Workers: React.FC = () => {
    const context = usePersonContext();

    return (
        <div>
            {context.persons.length !== 0 && 
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Data</th>
                            <th>CPF</th>
                            <th>RG</th>
                            <th>Nacionalidade</th>
                            <th>Estado Civil</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {context.persons.map((p) => 
                        <tr key={Number.parseInt(p.id.toString())}>
                            <td>{p.name}</td>
                            <td>{p.email}</td>
                            <td>{p.telefone}</td>
                            <td>{p.date}</td>
                            <td>{p.cpf}</td>
                            <td>{p.rg}</td>
                            <td>{p.nacionalidade}</td>
                            <td>{p.estadoCivil}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            }
                
                
        </div>
    );
    
}

export default Workers;