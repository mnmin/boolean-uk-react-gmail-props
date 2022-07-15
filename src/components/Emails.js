import Email from "./Email.js";
//{ emails, toggleRead, toggleStar }
// parameter received is an object 'props'
const Emails = (props) => {
  const emails = props.emails;
  const toggleRead = props.toggleRead;
  const toggleStar = props.toggleStar;
  return (
    <>
      <main className="emails">
        <ul>
          {emails.map((email, index) => (
            <Email
              email={email}
              key={index}
              toggleRead={toggleRead}
              toggleStar={toggleStar}
            />
          ))}
        </ul>
      </main>
    </>
  );
};

export default Emails;
