var aws = require('aws-sdk');
var ses = new aws.SES({
   region: 'us-east-1'
});

exports.handler = function(event, context) {
    console.log("Incoming: ", event);
   // var output = querystring.parse(event);
   
    const sender = "Alex Bierach <alexdbierach@gmail.com>";
    
    const recipient = event.email;
    
    // The subject line for the email.
    const subject = "Your Care Plan";
    
    const carePlan = JSON.parse(event.careplan);
    console.log('logging care plan parsed', carePlan);
    
    let carePlanHtml = '';
 
    carePlan.forEach((item) => {
        let promptHtml = `<p>${item.prompt}</p>`;
        let options = '';
        
        item.options.forEach((option) => {
            let optionHtml;

            if (option.data) {
              optionHtml = `<li>
                              <h3>${option.text}</h3>
                              <p>${option.data}</p>
                            </li>`;
            } else {
              optionHtml = `<li>${option.text}</li>`;
            }

            options += optionHtml;
        });
        
        let optionsHtml = `<ul>${options}</ul>`;
        
        let questionHtml = `<div>${promptHtml}${optionsHtml}</div>`;
        
        carePlanHtml += questionHtml;

    });
    
    let tipsHtml = `<div>
            <h3>Tips for loved ones:</h3>
            <p>What loved ones should know about supporting you as a new mother:</p>
            <ul>
              <li>Their support makes a big difference – for you, the baby, and the entire family</li>
              <li>If a mother is feeling depressed or anxious, it will not just go away by itself – support and help is needed, and they play an important role in that process</li>
              <li>With the right help and support, mothers who are struggling will get better, and the overwhelm of parenting will lessen.</li>
              <li>The sooner you get the support and help you need as a new mother, the sooner you will start to feel better and adjust to parenting</li>
            </ul>
            
            <h3>Emergency Helpline</h3>
            <p>PSI Warmline - <a href="tel:18009444773">1.800.944.4773</a></p>
            <p>Postpartum Support International has as warmline. You can always call, leave a message, and a support volunteer will call you back. Spanish speaking available.</p>
          </div>`;
    
                
    // The HTML body of the email.
    const body_html = `<html>
    <head></head>
    <body>
      <h1>Your Care Plan</h1>
      ${carePlanHtml}
      ${tipsHtml}
      </body>
    </html>`;
    
    // The character encoding for the email.
    const charset = "UTF-8";
    
    // Create a new SES object. 
    var ses = new aws.SES();
    
    // Specify the parameters to pass to the API.
    var params = { 
      Source: sender, 
      Destination: { 
        ToAddresses: [
          recipient 
        ],
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: charset
        },
        Body: {
        //   Text: {
        //     Data: body_text,
        //     Charset: charset 
        //   },
          Html: {
            Data: body_html,
            Charset: charset
          }
        }
      }
    };


    console.log('===SENDING EMAIL===');
    var email = ses.sendEmail(params, function(err, data){
        if(err) console.log(err);
        else {
            console.log("===EMAIL SENT===");
            console.log(data);


            console.log("EMAIL CODE END");
            console.log('EMAIL: ', email);
            context.succeed(event);

        }
    });

};