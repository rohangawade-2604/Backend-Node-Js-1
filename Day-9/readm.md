### Relationship in MongoDB --> It's a way tow or more things's (collections are in case) connected

## 3 Kind of Relationship

**`A. 1-1`**

**`B. 1-Many`**

**`c. Many-Many`**

___

Collection --> [ ]

documents --> { }

___

**`1-1 Relationship`**

        *Instructor Collections*

        employee_code
        techstack
        yearofexperience


        *students collections*

        student_code
        batch
        user_id


        *User Collections*

        user_id
        name
        email
        city
        blood_group
        phone number

### Solutions :-

1. Way is put :- user_id in to student_collections --> right way

2. Way is put :- students_id in to user_collections

___

**`1-Many Relationship`**

Linkedin example---

        *post collections*

        post_id
        title 
        body
        no_of_reaction


        *comments collections*

        comment_id
        text
        no_of_reaction
        post_id

Solutions :-

1. Way to put :- comments_id in to post_collections

2. Way is put :- post_id in to comment_collections --> right way

___

**`Many to Many Relationship`**

    * Tags Collections * : Python , node , express , git , MySQL

    * Question collections * : 

___


DEPENDEND COLLECTIONS AND INDEPENDENT COLLECTIONS

**`child collections - parent collections`** 


1.  1-1 Relationship

         student --> DEPENDENT || user --> INDEPENDENT

1.  1-Many Relationship

         post --> DEPENDENT || comment --> INDEPENDENT

1.  1-1 Relationship

         student --> DEPENDENT || user --> INDEPENDENT