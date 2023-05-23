import { ref, onMounted } from 'vue';

export const useApp = () => {
    const makeTriforce = (rows: number) => {
        let triforce: string = '';
        const blank = ' ';
        let spaces = '';
        for (let row = 0; row < rows; row++) {
            spaces = blank.repeat((rows * 2) - row - 1);
            triforce += spaces + '▲'.repeat((2 * row) + 1) + '\n';
        }

        for (let row = 0; row < rows; row++) {
            spaces = blank.repeat(rows - row - 1);
            triforce += (spaces + '▲'.repeat((2 * row) + 1) + spaces).repeat(2) + '\n';
        }
  
        return triforce;
    }

    onMounted(() => {
        console.log(makeTriforce(10));
    });

    return {
        
    }
}