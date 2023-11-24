import {Router} from 'express';

//middleware
import {verifyAuthorization} from '../middlewares/verifyAuthorization';

//controllers
import {RegisterClientController} from '../controllers/RegisterClientController';
import { DeleteClientController } from '../controllers/DeleteClientController';
import { FindAllClientsController } from '../controllers/FindAllClientsController';
import { AuthenticateClientController } from '../controllers/AuthenticateClientController';


const routesClients = Router();

const authenticateClientController = new AuthenticateClientController();
routesClients.post('/client/session',authenticateClientController.handle);

const registerClientController = new RegisterClientController();
routesClients.post('/client/register',registerClientController.handle);

const deleteClientController = new DeleteClientController();
routesClients.delete('/client/remove',verifyAuthorization, deleteClientController.handle);

const findAllClientsController = new FindAllClientsController();
routesClients.get('/client/accountAlls', findAllClientsController.handle);

export {routesClients}
