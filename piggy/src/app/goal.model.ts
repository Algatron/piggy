export interface IGoal {

  uid?: string,

  name: string,
  description?: string,
  
  reached?: boolean, 
  claimed?: boolean,

  targetAmount: number

  schedule?: {
    targetDate?: string
  },

  category?: string,

  transactions?: {
    total: number,
    // history
  }

}