# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Userjob.destroy_all
Job.destroy_all
Company.destroy_all
User.destroy_all

status = [
    'wishlist',
    'applied',
    'interview',
    'offer recieved',
    'offer accepted',
    ]

      
      
     5.times do
       c = Company.create(
        companyname:Faker::Company.name,
        baselocation:Faker::Address.full_address,
        about:Faker::Company.industry
     ) 
    
     uscr = User.create(
      email:Faker::Internet.email,
       password:'123456'
      )

        u = User.create(
         
         email:Faker::Internet.email,
         password:'123456'
      )

      5.times do
      j = Job.create(
            jobname:Faker::Job.title,
             salary:400000,
             description:Faker::Job.key_skill,
             remote:Faker::Boolean.boolean,
             location:Faker::Address.full_address,
             isFilled:Faker::Boolean.boolean,
             company_id:c.id,
             user_id:uscr.id                 
          )
      
         uj = Userjob.create(
         status:status.sample,
         user_id:u.id,
         job_id:j.id
        )
      
      end
    end
        
      
    
      puts "user size:#{User.all.size}"
      puts "userjobs size:#{Userjob.all.size}"
      puts "Job size:#{Job.all.size}"
      puts "Company size:#{Company.all.size}"
    
    
