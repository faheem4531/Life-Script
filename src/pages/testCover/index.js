// import clockMain from "../../_assets/png/clockMain"
import FabricCanvas from "../../components/dashboardComponent/FabricCanvas"

const BookCoverPage = () => {
  const imageSrc = "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=1024x1024&w=is&k=20&c=K8yBJVB-TtpPF1O2zOhVlzXECDxJsadlRrLf4gXXNkk=";
  const title = 'Your Book Title';
  const author = 'Abubakar';

  return (
    <div>
      <h1>Book Cover Generator</h1>
      <FabricCanvas imageSrc={imageSrc} title={title} author={author} />
    </div>
  );
};

export default BookCoverPage;
