<?php

$to      = 'email Address'; // To Email Address

$name= $_POST['name'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$mesg= $_POST['message'];
//$message.= $message.'\n\r';
$message= 'Name:  '.$name.'\n\r';
$message.= 'phone:  '.$phone.'\n\r';
$message.= 'Email:  '.$email.'\n\r';

$subject = 'New Contact Form Message From Template '.$_POST['template'];
$message = $message;
$headers = 'From: '.$email . "\r\n" .
    'Reply-To: '.$email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
	
	// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

$message = '<table align="center" border="0" cellpadding="0" cellspacing="1" style="background:#ccc" width="599">
  <tbody>
    <tr>
      <td width="597"><table align="center" border="0" cellpadding="0" cellspacing="5" style="background:#FFF" width="593">
          <tbody>
            <tr>
              <td width="585"><table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td bgcolor="#dcd5d4" width="10">&nbsp;</td>
                      <td align="left" bgcolor="#dcd5d4" height="60" style="font-family:Arial, Helvetica, sans-serif; font-size:0.938em; color:#000; /* [disabled]text-transform:uppercase; */" valign="middle">Hi '.$name.'!<br><span style="color:#000;"> '.$email.'</span></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
            <tr>
              <td bgcolor="#eaebf7" valign="top"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial, Helvetica, sans-serif; font-size:0.7em;" width="100%">
                  <tbody>
                    <tr>
                      <td bgcolor="#ffffff" valign="top"><table border="0" cellpadding="0" cellspacing="10" height="62" width="100%">
                          <tbody>
                            <tr>
                              <td height="42" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; color:#000">'.$mesg.'</td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table></td>
    </tr>
  </tbody>
</table>';
mail($to, $subject, $message, $headers);

?>
