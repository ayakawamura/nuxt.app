
export const useCounter = () => {
	const counter: Ref<number> = useState('counter', () => 0);

	// state更新関数
  const updateCounter = (counter: Ref<number>) => (value: number) => {
    counter.value += value;
  };

	return {
    counter: readonly(counter), // readonlyでラップして、外部からの直接変更を防ぐ
    updateCounter: updateCounter(counter),
  };

}