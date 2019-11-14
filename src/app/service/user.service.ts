export class UserService{
    getUsers(){
        return [
            {
                'nombre': 'Alex',
                'edad': 25,
                'estado': 'soltero'
            },
            {
                'nombre': 'Alberto',
                'edad': 25,
                'estado': 'divorciado'
            },
            {
                'nombre': 'Antonio',
                'edad': 23,
                'estado': 'casado'
            }
        ]
    }
}