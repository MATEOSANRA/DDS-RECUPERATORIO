import { useForm } from 'react-hook-form';
import service from '../../services/deudor.service.js';

export default function Registro({ setAction, loadData }) {
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await service.saveDeudor(data);
    loadData();
    setAction('C');
  };

  const validateFechaDeuda = (value) => {
    const today = new Date();
    const selectedDate = new Date(value);
    return selectedDate >= today || 'La fecha no puede ser anterior a la actual';
  };

  const validateImporteAdeudado = (value) => {
    return value >= 0 || 'El importe no puede ser negativo';
  };

  return (
    <div className='container_app'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Registrar Deudor</h5>
        <div className="form-group">
          <label htmlFor="ApellidoYNombre">Apellido y Nombre</label>
          <input 
            type="text" 
            className="form-control" 
            id="ApellidoYNombre" 
            {...register("ApellidoYNombre", { 
              required: 'Este campo es requerido', 
              minLength: { value: 5, message: 'Debe tener al menos 5 caracteres' }, 
              maxLength: { value: 50, message: 'No puede tener más de 50 caracteres' } 
            })} 
          />
          {errors.ApellidoYNombre && <span className='error'>{errors.ApellidoYNombre.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="FechaDeuda">Fecha Deuda</label>
          <input 
            type="date" 
            className="form-control" 
            id="FechaDeuda" 
            {...register("FechaDeuda", { 
              required: 'Este campo es requerido',
              validate: validateFechaDeuda
            })} 
          />
          {errors.FechaDeuda && <span className='error'>{errors.FechaDeuda.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="ImporteAdeudado">Importe Adeudado</label>
          <input 
            type="number" 
            className="form-control" 
            id="ImporteAdeudado" 
            {...register("ImporteAdeudado", { 
              required: 'Este campo es requerido',
              validate: validateImporteAdeudado
            })} 
          />
          {errors.ImporteAdeudado && <span className='error'>{errors.ImporteAdeudado.message}</span>}
        </div>
        <div>
          <button type="submit" className="btn btn-primary mt-3 me-2">Registrar</button>
          <button type="button" className="btn btn-danger mt-3" onClick={() => setAction('C')}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

