import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, BeforeInsert } from 'typeorm';
import { format, parse } from 'date-fns';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ type: 'varchar', length: 15 })
  dob: string;

  @Column()
  email: string;

  @Column({ length: 15 })
  mobileNo: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  isVerified: boolean;

  
  @BeforeInsert()
  formatDob(): void {
      const dobDate = new Date(this.dob); // Assuming dob is a string
      const day = String(dobDate.getDate()).padStart(2, '0');
      const month = String(dobDate.getMonth() + 1).padStart(2, '0');
      const year = dobDate.getFullYear();
      this.dob = `${day}-${month}-${year}`;
  }
  
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  updatedAt: Date;

  @DeleteDateColumn({ type: "timestamp" })
  deletedAt: Date;

  @ManyToOne(() => User, user => user.id, { nullable: true })
  @JoinColumn({name:'createdBy'})
  createdBy:number;

  @ManyToOne(() => User, user => user.id, { nullable: true })
  @JoinColumn({name:'updatedBy'})
  updatedBy:number;
 
  @ManyToOne(() => User, user => user.id, { nullable: true })
  @JoinColumn({name:'deletedBy'})
  deletedBy:number;

}

@Entity()
export class Recipes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    recipeName: string;

    @Column()
    protein: string;

    @Column()
    carbohydrates: string;

    @Column()
    fat: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date;
    
    @DeleteDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    deletedAt: Date;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'createdBy'})
    createdBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'updatedBy'})
    updatedBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'deletedBy'})
    deletedBy:number;
}

@Entity()
export class Mealtime {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    mealTime: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date;
    
    @DeleteDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    deletedAt: Date;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'createdBy'})
    createdBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'updatedBy'})
    updatedBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'deletedBy'})
    deletedBy:number;
}

@Entity()
export class Plans {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    plans: string;

    @Column()
    duration: string;

    @Column()
    rupees: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date;
    
    @DeleteDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    deletedAt: Date;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'createdBy'})
    createdBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'updatedBy'})
    updatedBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'deletedBy'})
    deletedBy:number;
}

@Entity()
export class UserPlanMapping {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    planId: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date;
    
    @DeleteDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    deletedAt: Date;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'createdBy'})
    createdBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'updatedBy'})
    updatedBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'deletedBy'})
    deletedBy:number;
}

@Entity()
export class UserBmiMapping {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    bmiId: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date;
    
    @DeleteDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    deletedAt: Date;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'createdBy'})
    createdBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'updatedBy'})
    updatedBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'deletedBy'})
    deletedBy:number;
}

@Entity()
export class RecipeMealtimeMapping {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    recipeId: string;

    @Column()
    mealtimeId: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date;
    
    @DeleteDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    deletedAt: Date;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'createdBy'})
    createdBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'updatedBy'})
    updatedBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'deletedBy'})
    deletedBy:number;
}

@Entity()
export class BmiCalculations {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    gender: string;

    @Column({ length: 15 })
    mobile: string;

    @Column()
    email: string;

    @Column({ type: 'varchar', length: 15 })
    dob: string;
    
    @BeforeInsert()
    formatDob(): void {
        const dobDate = new Date(this.dob); // Assuming dob is a string
        const day = String(dobDate.getDate()).padStart(2, '0');
        const month = String(dobDate.getMonth() + 1).padStart(2, '0');
        const year = dobDate.getFullYear();
        this.dob = `${day}-${month}-${year}`;
    }

    @Column()
    height: number;

    @Column()
    weight: number;

    @Column()
    bmi: number;

    @Column()
    bmiCategory: string;

    @Column()
    minHealthyBmi: number;

    @Column()
    maxHealthyBmi: number;
    
    @Column()
    healthyWeightForHeight: number;

    @Column()
    gainToHealthyBmi: number;

    @Column()
    loseToHealthyBmi: number;

    @Column()
    ponderalIndex: number;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date;
    
    @DeleteDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    deletedAt: Date;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'createdBy'})
    createdBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'updatedBy'})
    updatedBy:number;
    
    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn({name:'deletedBy'})
    deletedBy:number;
}
