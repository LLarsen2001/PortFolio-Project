# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Job.destroy_all
Company.destroy_all

status = [
    'wishlist',
    'applied',
    'interview',
    'offer recieved',
    'offer accepted',
    ]

     lan = User.create(
         uid:2,
         email:'lance@gmail.com',
         password:'123456'
      )

    5.times do
         Company.create(
           companyname:Faker::Company.name,
           baselocation:Faker::Address.full_address,
           about:Faker::Company.industry
        )
        5.times do
             lan = Job.create(
                 jobname:Faker::Job.title,
                 salary:400000,
                 description:Faker::Job.key_skill,
                 remote:Faker::Boolean.boolean,
                 location:Faker::Address.full_address,
                 isFilled:Faker::Boolean.boolean
            )
        end
        
        
      puts "lan size:#{User.all.size}"
      puts "Job size:#{Job.all.size}"
      puts "Company size:#{Company.all.size}"
    end
    
