class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }

  class Employee extends User {
    protected admissionDate: Date;
    protected baseSalary: number;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      admissionDate: Date,
      baseSalary: number
    ) {
      super(id, email, name, password);
      this.admissionDate = admissionDate;
      this.baseSalary = baseSalary;
      }
      
      public getAdmissionDate(): Date {
          return this.admissionDate
      }
  
      public getBaseSalary(): number {
          return this.baseSalary
      }
  }

  class User {
	

	public interoduceYourself(): string {
	   return "Olá, bom dia!"
	}
}