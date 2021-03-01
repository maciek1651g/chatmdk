function joinMessage(data)
{
    let idRoom = data.idroom
    let status = data.status

    if(idRoom)
    {
        if(status)
        {
            //Dołączono do pokoju
            let count = data.count
            let texts = data.texts

            if(count && texts)
            {
                //Wywołanie funkcji odpowiedzialnej za wyświetlenie wiadomości i liczby osób w pokoju
            }
            else
            {
                //W wiadomości nie ma zmiennej count lub texts
            }
        }
        else
        {
            //W wiadomości nie ma zmiennej status lub nie udało się dołączyć do pokoju
        }
    }
    else
    {
        //W wiadomości nie podano pokoju
    }
}

function leaveMessage(data)
{
    let idRoom = data.idroom
    let status = data.status

    if(idRoom)
    {
        if(status)
        {
           //Wywołanie funkcji usuwającej pokój z widoku
        }
        else
        {
            //W wiadomości nie ma zmiennej status lub nie udało się wyjść z pokoju(czyt. nie należałeś do pokoju)
        }
    }
    else
    {
        //W wiadomości nie podano pokoju
    }
}

function msgMessage(data)
{
    let idRoom = data.idroom
    let text = data.text

    if(idRoom && text)
    {
        //Dodanie nowej wiadomości do czatu
    }
    else
    {
        //W wiadomości nie podano pokoju lub tekstu wiadomości
    }
}

function updateMessage(data)
{
    let idRoom = data.idroom
    let count = data.count

    if(idRoom && count)
    {
        //Informacja o dołączeniu lub opuszczeniu pokoju przez inną osobę
        //rozpoczęcie czatu lub zakończenie
    }
    else
    {
        //W wiadomości nie podano pokoju lub ilości osób
    }
}

function errorMessage(data)
{
    let description = data.description

    if(description)
    {
        //Jakieś info o błędzie ale nie wiadomo do którego pokoju
    }
    else
    {
        //W wiadomości nie podano opisu błędu
    }
}