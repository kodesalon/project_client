import Board from 'components/Board';
import { useEffect, useState } from 'react';
import { getBoards } from 'apis/board';

const Boards = () => {
  const [boards, setBoards] = useState([]);
  const [lastBoardId, setLastBoadId] = useState(1);
  const [size, setSize] = useState(10);

  useEffect(() => {
    getBoards({ lastBoardId, size }).then((res) => {
      console.log(res);
      if (res.code) {
      } else {
        setBoards(boards);
      }
    });
  }, []);

  return boards ? (
    <>
      {boards.map((elem) => (
        <Board board={elem} />
      ))}
    </>
  ) : null;
};

export default Boards;
