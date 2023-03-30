const CharacterComponent = ({data}) => {
  const { body, hair, top, bottoms } = data;

  return (
    <>
    <div className={`${body}`}>
      <div className={`${hair}`}>
        <div className={`${top}`}>
          <div className={`${bottoms}`}></div>
        </div>
      </div>
    </div>    
    </>
  );
};

export default CharacterComponent;