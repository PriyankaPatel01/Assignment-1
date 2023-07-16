const userData = [
    {
        Id: 10,
        Name: 'Albert',
        Avatar: "",
        Email: 'alb@gmail.com',
        Desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptate iusto voluptatum maiores inventore. Asperiores sapiente provident nihil voluptatem neque corporis deserunt temporibus officia dolorem, adipisci maiores? Accusamus, voluptatum beatae.',
        Gender: 'Male'
    },
    {
        Id: 9,
        Name: 'Olivia',
        Avatar: "",
        Email: 'oliv@gmail.com',
        Desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptate iusto voluptatum maiores inventore. Asperiores sapiente provident nihil voluptatem neque corporis deserunt temporibus officia dolorem, adipisci maiores? Accusamus, voluptatum beatae.',
        Gender: 'female'
    },
    {
        Id: 8,
        Name: 'Matilda',
        Avatar: "",
        Email: 'matilda@gmail.com',
        Desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptate iusto voluptatum maiores inventore. Asperiores sapiente provident nihil voluptatem neque corporis deserunt temporibus officia dolorem, adipisci maiores? Accusamus, voluptatum beatae.',
        Gender: 'female'
    },

    {
        Id: 7,
        Name: 'Harry',
        Avatar: "",
        Email: 'harry@gmail.com',
        Desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptate iusto voluptatum maiores inventore. Asperiores sapiente provident nihil voluptatem neque corporis deserunt temporibus officia dolorem, adipisci maiores? Accusamus, voluptatum beatae.',
        Gender: 'Male'
    },
    {
        Id: 6,
        Name: 'Taylor',
        Avatar: "",
        Email: 'taylor@gmail.com',
        Desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptate iusto voluptatum maiores inventore. Asperiores sapiente provident nihil voluptatem neque corporis deserunt temporibus officia dolorem, adipisci maiores? Accusamus, voluptatum beatae.',
        Gender: 'Female'
    },
    {
        Id: 5,
        Name: 'james',
        Avatar: "",
        Email: 'james@gmail.com',
        Desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptate iusto voluptatum maiores inventore. Asperiores sapiente provident nihil voluptatem neque corporis deserunt temporibus officia dolorem, adipisci maiores? Accusamus, voluptatum beatae.',
        Gender: 'Male'
    },
    {
        Id: 4,
        Name: 'Louis',
        Avatar: "",
        Email: 'louist@gmail.com',
        Desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptate iusto voluptatum maiores inventore. Asperiores sapiente provident nihil voluptatem neque corporis deserunt temporibus officia dolorem, adipisci maiores? Accusamus, voluptatum beatae.',
        Gender: 'Male'
    },
    {
        Id: 3,
        Name: 'Fyodor',
        Avatar: "",
        Email: 'fdost@gmail.com',
        Desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptate iusto voluptatum maiores inventore. Asperiores sapiente provident nihil voluptatem neque corporis deserunt temporibus officia dolorem, adipisci maiores? Accusamus, voluptatum beatae.',
        Gender: 'Male'
    },
    {
        Id: 2,
        Name: 'Louisa',
        Avatar: "",
        Email: 'Louisa@gmail.com',
        Desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptate iusto voluptatum maiores inventore. Asperiores sapiente provident nihil voluptatem neque corporis deserunt temporibus officia dolorem, adipisci maiores? Accusamus, voluptatum beatae.',
        Gender: 'Female'
    },
    {
        Id: 1,
        Name: 'Lucy',
        Avatar: "",
        Email: 'lucy@gmail.com',
        Desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptate iusto voluptatum maiores inventore. Asperiores sapiente provident nihil voluptatem neque corporis deserunt temporibus officia dolorem, adipisci maiores? Accusamus, voluptatum beatae.',
        Gender: 'Female'
    },

]


const Data = () => {
    const display = () =>
    {
        for(let i=0; i<2; i++)
        {
            return(
                <>
                <div className="container">
                    {userData[i].Name}
                </div>
                </>
            )
        }

    }
  return (
    <>
    {display}
    </>
  )
}

export default Data
