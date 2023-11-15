import {Request,Response} from 'express';
import {RegisterClientCaseUse} from '../model/RegisterClientCaseUse';
import Client from '../model/entities/Client';

export class RegisterClientController {


  async handle(req:Request,res:Response):Promise<Response>{
    const {cpf,name,latitude,longitude,password,username } = <Client>req.body;

    //enviar os dados da requisição para meu caso de uso
    const registerClientCaseUse = new RegisterClientCaseUse();
    const result = await registerClientCaseUse.execute({cpf,name,latitude,longitude,password,username });


    return res.status(200).json(result);

  }
}