using MailKit.Net.Smtp;
using MimeKit;
using System.Drawing;
using System.Net.Mail;
using System.Threading.Tasks;
using CatacombApp.Server.Services;
using static System.Net.Mime.MediaTypeNames;

public interface IEmailService
{
    Task SendEmailAsync(string recipientEmail, string subject, string body);

    Task SendEmailChangeNotificationAsync(string name, string oldEmail, string newEmail, string userId);

    Task SendPasswordChangeLinkAsync(string name, string email, string userId);
}

public class SmtpEmailService : IEmailService
{
    private readonly string _smtpHost;
    private readonly int _smtpPort;
    private readonly string _smtpUsername;
    private readonly string _smtpPassword;
    private readonly TokenService _tokenService;

    public SmtpEmailService(string smtpHost, int smtpPort, string smtpUsername, string smtpPassword, TokenService tokenService)
    {
        _smtpHost = smtpHost;
        _smtpPort = smtpPort;
        _smtpUsername = smtpUsername;
        _smtpPassword = smtpPassword;
        _tokenService = tokenService;
    }

    public async Task SendEmailChangeNotificationAsync(string name, string oldEmail, string newEmail, string userId)
    {
        var token = _tokenService.GenerateEmailChangeToken(userId, newEmail);

        var userName = $"{name}";

        var link = $"https://catacombstudios.com/change-email?token={token}";

        var body = $@"
        <!DOCTYPE html>
        <html lang='en'>
            <head>
                <meta charset='UTF-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <title>Email Change Request</title>
                <style>
                body {{
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
                }}
                .email-container {{
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }}
                .header {{
                  background-color: #424242;
                  color: white;
                  text-align: center;
                  padding: 10px 0;
                  border-radius: 8px 8px 0 0;
                }}
                .header h1 {{
                  margin: 0;
                  font-size: 24px;
                }}
                .header img {{
                  display: block;
                  margin: 0 auto;
                  width: 150px;
                  height: auto;
                }}
                .content {{
                  padding: 20px;
                  color: #333333;
                  line-height: 1.6;
                }}
                .content h2 {{
                  color: #424242;
                  font-size: 20px;
                  margin-bottom: 10px;
                }}
                .footer {{
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
                  color: #777777;
                }}
                .footer a {{
                  color: #424242;
                  text-decoration: none;
                }}
                .button {{
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #424242;
                  color: white;
                  text-decoration: none;
                  border-radius: 5px;
                  margin-top: 20px;
                }}
                </style>
            </head>
            <body>
                <div>
                  <div class=""email-container"">
                    <div class=""header"">
                        <img src=""https://jackbittner.net/assets/images/white_logo.svg"" alt=""Catacomb Studios Logo""/>
                    </div>
                    <div class=""content"">
                      <h2>Hello, {userName}</h2>
                      <p>You requested to change your email address. Click the link below to confirm the change:</p>
                      <a href='{link}' class='button'>Confirm Email Change</a>
                      <p>If you didn't request this change, please ignore this email.</p>
                    </div>
                </div>
              </div>
            </body>
        </html>";

        await SendEmailAsync(oldEmail, "Confirm Your Email Change", body);
    }

    public async Task SendPasswordChangeLinkAsync(string name, string email, string userId)
    {
        var token = _tokenService.GenerateEmailChangeToken(userId, email);

        var userName = $"{name}";

        var link = $"https://catacombstudios.com/reset-password?token={token}";

        var body = $@"
        <!DOCTYPE html>
        <html lang='en'>
            <head>
                <meta charset='UTF-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <title>Email Change Request</title>
                <style>
                body {{
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
                }}
                .email-container {{
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }}
                .header {{
                  background-color: #424242;
                  color: white;
                  text-align: center;
                  padding: 10px 0;
                  border-radius: 8px 8px 0 0;
                }}
                .header h1 {{
                  margin: 0;
                  font-size: 24px;
                }}
                .header img {{
                  display: block;
                  margin: 0 auto;
                  width: 150px;
                  height: auto;
                }}
                .content {{
                  padding: 20px;
                  color: #333333;
                  line-height: 1.6;
                }}
                .content h2 {{
                  color: #424242;
                  font-size: 20px;
                  margin-bottom: 10px;
                }}
                .footer {{
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
                  color: #777777;
                }}
                .footer a {{
                  color: #424242;
                  text-decoration: none;
                }}
                .button {{
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #424242;
                  color: white;
                  text-decoration: none;
                  border-radius: 5px;
                  margin-top: 20px;
                }}
                </style>
            </head>
            <body>
                <div>
                  <div class=""email-container"">
                    <div class=""header"">
                        <img src=""https://jackbittner.net/assets/images/white_logo.svg"" alt=""Catacomb Studios Logo""/>
                    </div>
                    <div class=""content"">
                      <h2>Hello, {userName}</h2>
                      <p>You requested to reset your password. Click the link below to confirm the change:</p>
                      <a href='{link}' class='button'>Reset Password</a>
                      <p>If you didn't request this change, please ignore this email.</p>
                    </div>
                </div>
              </div>
            </body>
        </html>";

        await SendEmailAsync(email, "Reset Your Password", body);
    }


    public async Task SendEmailAsync(string recipientEmail, string subject, string body)
    {
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress("Catacomb Studios", _smtpUsername));
        message.To.Add(new MailboxAddress("", recipientEmail));
        message.Subject = subject;
        message.Body = new TextPart("html")
        {
            Text = body
        };

        using (var client = new MailKit.Net.Smtp.SmtpClient())
        {
            await client.ConnectAsync(_smtpHost, _smtpPort, MailKit.Security.SecureSocketOptions.StartTls);
            await client.AuthenticateAsync(_smtpUsername, _smtpPassword);
            await client.SendAsync(message);
            await client.DisconnectAsync(true);
        }
    }
}