const CharacterComponent = ({data}) => {
  const { body, hair, top, bottoms, shoes } = data;

  return (
    <>
    <div className={`${body}`}>
      <div className={`${hair}`}>
        <div className={`${top}`}>
          <div className={`${bottoms}`}>
            <div className={`${shoes}`}></div>
          </div>
        </div>
      </div>
    </div>    
    </>
  );
};

export default CharacterComponent;