import { FetchRequest } from '../FetchRequest';
import { GetQuestionsT } from './question.d';
import { useGlobalDispatch } from '../../hooks'
import { useNavigate } from 'react-router-dom';

export class ApiQuestions extends FetchRequest {

   private dispatch = useGlobalDispatch();
   private navigate = useNavigate();

   /**
    * list all questions from api
    */
   public async list(): Promise<void> {
      try {
         this.dispatch.setState({ key: 'quiz.loading', value: true, });
         const fetchResult: GetQuestionsT =
            await this.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean');

         this.dispatch.setState({ key: 'quiz.questions', value: fetchResult.results });
         this.dispatch.setState({ key: 'quiz.step.total', value: fetchResult.results.length });
      } catch (error) {
         const errorMessage = 'Cannot list questions from API';
         this.dispatch.setState({ key: 'error', value: { message: errorMessage }});
         alert(errorMessage);
         this.navigate('/')
      } finally {
         this.dispatch.setState({
            key: 'quiz.loading',
            value: false,
         });
      }
   }
}