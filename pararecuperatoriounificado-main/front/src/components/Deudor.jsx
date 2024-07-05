import React from 'react';
import { useState, useEffect } from 'react';
import service from '../services/deudor.service.js';
import ConsultaDeudor from './deudor/ConsultaDeudor.jsx';
import RegistroDeudor from './deudor/RegistroDeudor.jsx'

function Deudor() {
  const [action, setAction] = useState('C');
  const [rows, setRows] = useState([]);

  useEffect(() => {
    loadData();
    }, []);

  const loadData = async () => {
    const data = await service.getDeudor();
    setRows(data.Items);
    
};

  const onRegistrar = () => {
    setAction('R')
  };

  console.log(rows)

  return (
    <div>
        {
            action === 'R'  && (
                    <RegistroDeudor setAction={setAction} loadData={loadData} />
                )
        }
        {
            action === 'C' && (
                <>
                    <ConsultaDeudor rows={rows} onRegistrar={onRegistrar} />
                </>
        )}
    </div>
  );
}

export default Deudor;
